import TelegramIcon from '@mui/icons-material/Telegram'

import LanguageIcon from '@mui/icons-material/Language'
import SearchIcon from '@mui/icons-material/Search'
import CampaignIcon from '@mui/icons-material/Campaign'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import Twitter from '../../img/twitter.png'

import Box from '@mui/material/Box'
// interface MyComponentProps {
//   placeholder: string
//   name?: string
//   className?: string
// }
// className={`typo-md ${className}`}

function MyIcon() {
  return (
    <div>
      <Box
        className="flex gap-[2px] justify-between"
        sx={{
          padding: '4px 6px',
          display: 'flex',
          margin: '4px',
          background: '#151617',
          borderRadius: '20px',
          color: 'gray',
        }}
      >
        <TelegramIcon />
        <img
          alt="twitter"
          className=" text-[--primary-color]"
          src={Twitter.src}
        />
        <LanguageIcon className="text-[--primary-color]" />
      </Box>
      <Box
        className="flex gap-[2px] justify-between"
        sx={{
          padding: '4px 6px',
          display: 'flex',
          margin: '4px',
          background: '#151617',
          borderRadius: '20px',
          color: 'gray',
        }}
      >
        <SearchIcon className="text-[--primary-color] opacity-50" />
        <CampaignIcon className="text-[--primary-color]" />
        <InsertDriveFileIcon className="text-[--primary-color] opacity-50" />
      </Box>
    </div>
  )
}

export default MyIcon
