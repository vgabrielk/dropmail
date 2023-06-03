import { Box, Button, Stack, TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { Item } from "../../components/ItemComponent";

import RefreshIcon from '@mui/icons-material/Refresh';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import copy from "copy-to-clipboard";

interface Props {
  time: number;
}

const RandomEmail = (props: Props) => {
  const [emailValue, setEmailValue] = useState<string>('alksdl@dev.com')

  //   const handleCopyText = (e : string) => {
  //     setEmailValue(e.target.value);
  //  } 

  // const generateRandomEmail = async () => {
  //   const response = await api.post("https://dropmail.me/api/graphql/vgabrielk/", `
  //     mutation {
  //       introduceSession {
  //           id,
  //           expiresAt,
  //           addresses {
  //             address
  //           }
  //       }
  //   }
  //     `)
  //   console.log(response);
  // }

  const copyToClipboard = () => {
    copy(emailValue);
    alert(`You have copied "${emailValue}"`);
  }

  // useEffect(() => {
  //   generateRandomEmail()
  // }, [])
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
            <Button>
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