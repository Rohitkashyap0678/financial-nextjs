import { Box, Typography } from '@mui/material'
import { Header } from '../common'
import Footer from '../components/Footer/Footer'

export default function index() {
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100%',
          height: '75vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: '96px ',
              background: '#00F904',
              height: '6px',
              flexShrink: '0',
            }}
          ></Box>
          <Box>
            <Typography
              m={2}
              style={{
                color: '#00F902',
                fontFamily: 'Monomaniac One',
                fontSize: '30px',
                fontWeight: '400',
                textTransform: 'uppercase',
              }}
            >
              sorry
            </Typography>
          </Box>
          <Box
            sx={{
              width: '96px ',
              background: '#00F904',
              height: '6px',
              flexShrink: '0',
            }}
          ></Box>
        </Box>

        <Box>
          <Typography
            sx={{
              color: '#00F902',
              fontFamily: 'Monomaniac One',
              fontSize: '120px',
              fontWeight: '400',
              textTransform: 'uppercase',
            }}
          >
            404
          </Typography>
        </Box>
        <Box
          sx={{
            width: '321px ',
            background: '#00F904',
            height: '6px',
            flexShrink: '0',
          }}
        >
          <Typography
            mt={2}
            style={{
              color: '#00F902',
              fontFamily: 'Monomaniac One',
              fontSize: '28px',
              fontWeight: '400',
              textTransform: 'uppercase',
            }}
          >
            SORRY PAGE NOT FOUND
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Box className="mt-10">
        <Footer />
      </Box>
    </div>
  )
}
