import * as React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { CustomButton } from '../Custom/CustomButton'
import CustomInfo from '../Custom/CustomInfo'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiPaper-root': {
    borderRadius: '20px !important',
    color: 'white !important',
    border: '2px solid #48494d !important',
    background: '#151618 !important',
  },
}))

const AprCalculatorPopup = ({ open, handleClose }) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        className="arp-popup-diolog"
        sx={{ borderRadius: '20px', border: '2px solid #48494D' }}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, borderBottom: '2px solid #48494D' }}
          id="customized-dialog-title"
        >
          APR CALCULATOR
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box>
            <Typography className="typo-md flex gap-1 items-center">
              <CustomInfo />
              LP Fee Activate it? +0.12 BNB
            </Typography>
            <Typography className="typo-md flex gap-1 items-center">
              <CustomInfo />
              LP Fee Activate it? +0.12 BNB
            </Typography>
            <Typography className="typo-md flex gap-1 items-center">
              <CustomInfo />
              LP Fee Activate it? +0.12 BNB
            </Typography>
            <Typography className="typo-md flex gap-1 items-center">
              <CustomInfo />
              LP Fee Activate it? +0.12 BNB
            </Typography>
            <Typography className="typo-md flex gap-1 items-center">
              <CustomInfo />
              LP Fee Activate it? +0.12 BNB
            </Typography>
          </Box>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Box
            autoFocus
            className="justify-center mb-4 flex w-full"
            onClick={handleClose}
          >
            <CustomButton
              classname="whitespace-nowrap !px-10 !w-[200px] rounded-md"
              name="STAKE NOW"
            />
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default AprCalculatorPopup
