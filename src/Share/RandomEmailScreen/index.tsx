import { Box, Button, Paper, Stack, TextField, styled } from "@mui/material";
import { Fragment, useState } from "react";
import { Item } from "../../components/ItemComponent";

import RefreshIcon from '@mui/icons-material/Refresh';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const RandomEmail = () => {
  const [emailValue, setEmailValue] = useState<string>('alksdl@dev.com')

  return (
    <Fragment>
      <Stack spacing={0} sx={{ mt: 5 }}>
        <Item sx={{ display: 'flex', alignItems: 'center', margin: '10px 3rem', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              id="outlined-basic"
              value={emailValue}
              variant="outlined"
              placeholder="Teste"
              label="Your temporary email address"
            />
            <Button variant="outlined" sx={{ marginLeft: 1 }}>
              <ContentPasteIcon />
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 20px', flexDirection: 'column' }}>
            <Button>
              <RefreshIcon />
            </Button>
            <span>Autorefresh in </span>
            <b>15 seconds  </b>
          </Box>

        </Item>
      </Stack>

    </Fragment>
  );
}

export default RandomEmail;