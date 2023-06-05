import { Box, Button, Stack, TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Item } from "../../components/ItemComponent";
import { useDispatch, useSelector } from "react-redux";

import RefreshIcon from '@mui/icons-material/Refresh';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import copy from "copy-to-clipboard";
import api from "../../services/api";

interface Props {
  time: number;
}

const RandomEmail = (props: Props) => {
  const dispatch = useDispatch()
  const getInboxData = useSelector((state: any) => state.email.getInboxFn)

  const generateEmailQuery =`
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

     const setGlobalEmailId = (id : string) => {
      dispatch({
        type: 'EMAIL_ID',
        payload: id
      });
    } 


   const generateRandomEmail = async () => {
    try {
      const response = await api.post("/vgabrielk7", {query: generateEmailQuery}  )
      setEmailValue(response.data.data.introduceSession.addresses[0].address) 
      setGlobalEmailId(response.data.data.introduceSession.id)
    } catch (err) {
        console.log(err);
    }
   }

  const copyToClipboard = () => {
    copy(emailValue);
    alert(`You have copied "${emailValue}"`);
  }

   useEffect(() => {
     generateRandomEmail()
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
            <Button onClick={() => getInboxData()}>
              <RefreshIcon />
            </Button>
            <span>Autorefresh in </span>
            <b>{props.time}</b>
          </Box>

        </Item>
      </Stack>

    </Fragment>
  );
}

export default RandomEmail;