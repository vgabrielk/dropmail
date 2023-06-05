import { Box, Grid, Stack } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Item } from "../../components/ItemComponent";
import { mock } from "../../utils/mock";
import { useSelector } from "react-redux";

import api from "../../services/api";
import { store } from "../../redux/store";


interface Props {
  time: number;
}

interface ReceivedEmails {
  toAddr: string;
  text: string;
  rawSize: number;
  headerSubject: string;
  fromAddr: string;
  downloadUrl: string;
}

const Inbox = (props: Props) => {
  
  const id = useSelector((state: any) => state.email.email_id);
  const refreshTime = useSelector((state: any) => state.email.refreshTime);
  
  const [inbox, setInbox] = useState<ReceivedEmails[]>([]);
  const [activeInbox, setActiveInbox] = useState({})

  const getInboxDataQuery = `
  query {
    session(id: "${id}") {
        mails{
            rawSize,
            fromAddr,
            toAddr,
            downloadUrl,
            text,
            headerSubject
        }
    }
}
  `

  const getInboxData = async () => {
    try {
        const response = await api.post("/vgabrielk7", { query: getInboxDataQuery});
      console.log(response.data)
      setInbox(response.data.data.session?.mails)
          } catch (err) {
      console.log(err);
    }
  };

  if(refreshTime == 1) {
    getInboxData()
  }

  useEffect(() => {
      getInboxData();
      store.dispatch({
        type: 'GET_INBOX_FN',
        payload: getInboxData
      })
  }, [id]);

  return (
    <Fragment>
      <Stack spacing={0}>
        <Item sx={{ margin: "0 3rem", marginBottom: "2rem" }}>
          <h1 style={{ paddingBottom: "2rem" }}>Inbox</h1>
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
              {!inbox && 'Hello, welcome'}
              {inbox?.map((item: ReceivedEmails) => (
                <Box
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
            </Grid>
            <Grid item sm={16} md={8}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e0e0e0",
                  padding: 2,
                  boxSizing: "border-box",
                }}
              >
                <p>Your temp email add is ready...</p>
              </Box>
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </Fragment>
  );
};

export default Inbox;
