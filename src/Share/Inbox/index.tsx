import { Box, Grid, Stack } from "@mui/material";
import { Fragment } from "react";
import { Item } from "../../components/ItemComponent";

const Inbox = () => {


  return (
    <Fragment>
      <Stack spacing={0}>
        <Item sx={{ margin: '0 3rem', marginBottom: '2rem' }}>
          <h1 style={{ paddingBottom: '2rem' }}>Inbox</h1>
          <Grid container spacing={2} columns={16}>
            <Grid item sm={16} md={8} sx={{ overflowY: 'scroll', height: '200px', marginBottom: '20px' }}  >
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #e0e0e0',
                padding: 2,
                boxSizing: 'border-box',
              }}>
                <h4>Subject</h4>
                <p>Your temp email add is ready...</p>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #e0e0e0',
                padding: 2,
                boxSizing: 'border-box'
              }}>
                <h4>Subject</h4>
                <p>Your temp email add is ready...</p>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #e0e0e0',
                padding: 2,
                boxSizing: 'border-box',
              }}>
                <h4>Subject</h4>
                <p>Your temp email add is ready...</p>
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #e0e0e0',
                padding: 2,
                boxSizing: 'border-box'
              }}>
                <h4>Subject</h4>
                <p>Your temp email add is ready...</p>
              </Box>
            </Grid>
            <Grid item sm={16} md={8}  >
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #e0e0e0',
                padding: 2,
                boxSizing: 'border-box'
              }}>
                <p>Your temp email add is ready...</p>
              </Box>
            </Grid>
          </Grid>
        </Item>
      </Stack>
    </Fragment>
  );
}

export default Inbox;