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
import FormsInputTkd from '../../forms/FormsInputTkd'

interface AprCalculatorPopupProps {
  open: boolean // Add a type annotation for the 'open' prop
  handleClose: () => void
}

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

const AprCalculatorPopup: React.FC<AprCalculatorPopupProps> = ({
  open,
  handleClose,
}) => {
  const formInputs = [
    {
      Headername: 'Deposit Amount',
      placeholder: 'Input Value',
      inputName: 'STK',
    },
    {
      Headername: 'Staked For',
      // s
      placeholder: 'Input Value',
      inputName: ' DAYS',
    },
    {
      Headername: 'Rewards',
      placeholder: 'Input Value',
      inputName: ' RWD',
    },
  ]

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
          <Box component="div">
            <Typography className="typo-md flex gap-1 items-center">
              <CustomInfo />
              IPD: 100%
            </Typography>
            <Box
              className="grid md:grid-cols-2 mt-5 grid-cols-1"
              style={{ gap: '30px 60px' }}
            >
              {formInputs.map((input, index) => (
                <FormsInputTkd
                  key={index}
                  Headername={input.Headername}
                  placeholder={input.placeholder}
                  inputName={input.inputName}
                />
              ))}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Box
            component="div"
            className="justify-center mb-4 mt-6 flex w-full"
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
