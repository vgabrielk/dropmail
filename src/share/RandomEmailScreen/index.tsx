import { Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Item } from "../../components/ItemComponent";
import { useDispatch } from "react-redux";

import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import copy from "copy-to-clipboard";
import api from "../../services/api";
import toast from 'react-hot-toast'

interface Props {
  time: number;
}

const RandomEmail = (props: Props) => {

  const dispatch = useDispatch()

  const session = sessionStorage.getItem('session') as string;
  const email = sessionStorage.getItem('email') as string;
  
  const generateEmailQuery = `
  mutation {
   introduceSession {
       id,
       expiresAt,
       addresses {
         address
       }
   }
}
    `
  const [emailValue, setEmailValue] = useState<string>('')

  const setGlobalEmailId = (id: string) => {
    dispatch({
      type: 'EMAIL_ID',
      payload: id
    });
  }


  const generateRandomEmail = async () => {
    try {
      const response = await api.post("/vgabrielk7", { query: generateEmailQuery })
      setEmailValue(response.data.data.introduceSession.addresses[0].address)
      sessionStorage.setItem("email", response.data.data.introduceSession.addresses[0].address)
      setGlobalEmailId(response.data.data.introduceSession.id)
      sessionStorage.setItem("session", response.data.data.introduceSession.id)
    } catch (err) {
      console.log(err);
    }
  }

  const copyToClipboard = () => {
    copy(emailValue);
    toast.success(`You have copied "${emailValue}"`);
  }

  useEffect(() => {
    if (!session) {
      generateRandomEmail()
    }
    else {
      setGlobalEmailId(session)
      setEmailValue(email)
    }
  }, [])

  return (
    <Fragment>
      <Stack spacing={0} sx={{ mt: 5 }}>
        <Item sx={{
          display: 'flex',
          alignItems: 'center',
          margin: '10px 3rem',
          flexDirection: 'column'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <TextField
              id="outlined-basic"
              value={emailValue}
              variant="outlined"
              placeholder="Teste"
              label="Your temporary email address"
            />
            <Button variant="outlined" sx={{ marginLeft: 1 }} onClick={copyToClipboard}>
              <ContentPasteIcon />
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 20px', flexDirection: 'column' }}>
            <span>Inbox autorefresh in </span>
            <Box sx={{ position: 'relative', display: 'inline-flex', marginTop: '10px' }}>
              <CircularProgress color="success" variant="indeterminate" value={props.time} />
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: 'absolute',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  component="div"
                  color="text.secondary"
                >{`${Math.round(props.time)}`}</Typography>
              </Box>
            </Box>
          </Box>
        </Item>
      </Stack>
    </Fragment>
  );
}

export default RandomEmail;