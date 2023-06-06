import { Box, Button, Grid, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Item } from "../../components/ItemComponent";
import { useSelector } from "react-redux";

import api from "../../services/api";
import InboxData from "../../components/InboxData";
import RefreshIcon from '@mui/icons-material/Refresh';

interface Props {
  time: number;
}

interface ReceivedEmails {
  toAddr: string;
  text: string;
  rawSize: number;
  headerSubject?: string;
  fromAddr: string;
  downloadUrl: string;
}

const Inbox = (props: Props) => {
  const id = useSelector((state: any) => state.email.email_id);
  const session = sessionStorage.getItem('session') as string;

  const [inbox, setInbox] = useState<ReceivedEmails[]>([]);
  const [activeInbox, setActiveInbox] = useState({})
  const [inboxLength, setInboxLength] = useState(0);

  const getInboxDataQuery = `
    query {
      session(id: "${id}") {
        expiresAt
        mails {
          rawSize
          fromAddr
          toAddr
          downloadUrl
          text
          headerSubject
        }
      }
    }
  `

  const getInboxData = async () => {
    try {
      const response = await api.post("/vgabrielk7", { query: getInboxDataQuery });
      setInbox(response.data.data.session?.mails);
      setInboxLength(response.data.data.session?.mails.length || 0);
      localStorage.setItem('inboxlength', JSON.stringify(inboxLength));
    } catch (err) {
      console.log(err);
    }
  };

  const sendEmailNotification = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Tem e-mail novo pra você - Dropmail!");
      }
    });
  }

  useEffect(() => {
    if (inboxLength > parseInt(localStorage.getItem('inboxlength') || '0')) {
      sendEmailNotification();
    }
  }, [inboxLength]);

  useEffect(() => {
    getInboxData();
  }, [id, props.time]);

  return (
    <Fragment>
      <Stack spacing={0}>
        <Item sx={{ margin: "0 3rem", marginBottom: "2rem" }}>
          <Box sx={{ display: 'flex', marginBottom: '1.5rem' }}>
            <h1>Inbox</h1>
            <Button onClick={getInboxData}>
              <RefreshIcon />
            </Button>
          </Box>
          <Grid container spacing={2} columns={16}>
            <Grid
              item
              sm={16}
              md={8}
              sx={{
                overflowY: "scroll",
                height: "200px",
                marginBottom: "20px",
              }}
            >
              {inbox?.length > 0 ? (
                <Fragment>
                  {inbox?.map((item: ReceivedEmails, index) => (
                    <Box
                      key={index}
                      onClick={() => {
                        setActiveInbox(item);
                      }}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid #e0e0e0",
                        padding: 2,
                        boxSizing: "border-box",
                        cursor: "pointer",
                      }}
                    >
                      <h4>{item.headerSubject}</h4>
                      <span>{item.fromAddr}</span>
                    </Box>
                  ))}
                </Fragment>
              ) : 'No email in inbox'}
            </Grid>
            <Grid sx={{
              overflowY: "scroll",
              height: "200px",
              marginBottom: "20px",
            }}
              item sm={16} md={8}>
              <InboxData data={activeInbox} />
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </Fragment>
  );
};

export default Inbox;
