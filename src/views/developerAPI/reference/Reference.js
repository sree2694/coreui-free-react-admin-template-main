import React from 'react'
import {
  CCard,
  CCardBody,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@material-ui/core'
import Servers from './Servers'

const Reference = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickToOpen = () => {
    setOpen(true)
  }

  const handleToClose = () => {
    setOpen(false)
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <b>Servers</b>
          <CDropdown>
            <CDropdownToggle color="light" size="sm">
              https://api.edination.com/v2
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">https://api.edination.com/v2</CDropdownItem>
            </CDropdownMenu>
            <Button variant="outlined" color="primary" onClick={handleClickToOpen}>
              Authorize
            </Button>
            <Dialog open={open} onClose={handleToClose}>
              <DialogTitle>{'Available authorizations'}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <p>
                    ApiKey <b>(apiKey)</b>
                  </p>
                  <p>API key to authenticate requests</p>
                  <p> Name: Ocp-Apim-Subscription-Key</p>
                  <p> In: header</p>
                  <h5>Value:</h5>
                  <TextField></TextField>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button href="#" color="primary" autoFocus>
                  Authorize
                </Button>
                <Button onClick={handleToClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </CDropdown>
          <Servers />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Reference
