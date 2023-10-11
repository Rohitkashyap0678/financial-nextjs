import { Typography, Box, Container } from '@mui/material'
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
import EmailImage from '../img/mail.png'
import Twitter from '../img/twitter.png'

const Footer: React.FC = () => {
  const emailAddress = 'info@cakefinance.com' // Replace with the actual email address

  const handleEmailIconClick = () => {
    window.location.href = `mailto:${emailAddress}`
  }

  return (
    <Box py={3} sx={{ width: '100%', background: '#151618' }}>
      <Container sx={{ alignItems: 'right' }} maxWidth="xl">
        <Box className="flex items-center gap-10 text-end justify-end">
          <Typography
            noWrap
            className="typo-sm"
            variant="body2"
            textAlign={'right'}
            color="white"
          >
            Development Email: info@cakefinance.com
          </Typography>
          <Typography
            noWrap
            className="typo-sm"
            variant="body2"
            textAlign={'right'}
            color="white"
          >
            $CAKE Token
          </Typography>
          <Typography
            noWrap
            className="typo-sm"
            variant="body2"
            textAlign={'right'}
            color="white"
          >
            General Statement
          </Typography>
          <Typography
            noWrap
            className="typo-sm flex gap-3 items-center"
            variant="body2"
            textAlign={'right'}
            color="white"
          >
            © CAKEFinance.com 2020-2023
            <Box className="flex gap-1 relative bottom-[2px]">
              <a
                href={`mailto:${emailAddress}`}
                onClick={handleEmailIconClick}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="mail" className="w-10 h-10" src={EmailImage.src} />
              </a>
              <a
                href="https://t.me/your-telegram-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon className="w-10 h-10" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="twitter" className="w-9 h-9" src={Twitter.src} />
              </a>
            </Box>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

// // Footer.tsx
// import { Typography, Box, Container } from '@mui/material'
// import React from 'react'
// import TelegramIcon from '@mui/icons-material/Telegram'
// import EmailImage from '../img/mail.png'
// import Twitter from '../img/twitter.png'

// const Footer: React.FC = () => {
//   return (
//     <Box py={3} sx={{ width: '100%', background: '#151618' }}>
//       <Container sx={{ alignItems: 'right' }} maxWidth="xl">
//         <Box className="flex items-center gap-10 text-end justify-end">
//           <Typography
//             noWrap
//             className="typo-sm"
//             variant="body2"
//             textAlign={'right'}
//             color="white"
//           >
//             Development Email: info@cakefinance.com
//           </Typography>
//           <Typography
//             noWrap
//             className="typo-sm"
//             variant="body2"
//             textAlign={'right'}
//             color="white"
//           >
//             $CAKE Token
//           </Typography>
//           <Typography
//             noWrap
//             className="typo-sm"
//             variant="body2"
//             textAlign={'right'}
//             color="white"
//           >
//             General Statement
//           </Typography>
//           <Typography
//             noWrap
//             className="typo-sm flex gap-3 items-center"
//             variant="body2"
//             textAlign={'right'}
//             color="white"
//           >
//             © CAKEFinance.com 2020-2023
//             <Box className="flex gap-1 relative bottom-[2px]">
//               <img alt="mail" className="w-10 h-10" src={EmailImage.src} />
//               <TelegramIcon className="w-10 h-10" />
//               <img alt="twitter" className="w-9 h-9" src={Twitter.src} />
//             </Box>
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   )
// }

// export default Footer
