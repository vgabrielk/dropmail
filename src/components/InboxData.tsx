import { Box } from "@mui/material"
import { Fragment, useEffect } from "react"


import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface PropsData {
  data: {
    fromAddr?: string;
    text?: string;
    expiresAt?: string;
    headerSubject?: string;
    length?: string;
  }
}


const InboxData = ({ data }: PropsData) => {
  return (
    <Fragment>
      {data.fromAddr && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: 'column',
              gap: '10px',
              border: "1px solid #e0e0e0",
              padding: 2,
              boxSizing: "border-box",
              width: '100%'
            }}
          >
            <b>{data.headerSubject}</b>
            <Box
              sx={{
                display: "flex",
                alignItems: 'center',
                gap: '10px',
                boxSizing: "border-box",
                width: '100%'
              }}
            >
              <AccountCircleIcon />
              <h5>From : {data.fromAddr}</h5>
            </Box>
          </Box>
        </>
      )}
      <Box sx={{
        marginTop: '20px'
      }}>
        <p>{data.text}</p>
      </Box>
    </Fragment>
  )
}

export default InboxData