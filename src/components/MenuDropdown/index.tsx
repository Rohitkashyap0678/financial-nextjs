import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const MenuDropdown = () => {
  const subItems = [
    'Yield Farms',
    'All Farms',
    'Stoken Token',
    'Stake NFT',
    'Create Pool',
    'Create Nift Pool',
  ]

  const subItemsAssets = ['Assets Generator', 'All Assets', 'Create Assets']

  const subItemsTools = [
    'Sass Tools:',
    'Bulk Sender',
    'Wallet Generator',
    'Locker',
    'Audits',
  ]

  return (
    <div className="bg-black  min-w-[300px] relative !z-50 ">
      <Box className="border-spacing-1 border-white  rounded-2xl border-2 opacity-90">
        <Box className="flex gap-2 items-center px-3 py-2 border-b">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="md:mr-2 mr-0 flex bg-white rounded-full md:w-8 md:h-8 h-4 w-4"
          ></Typography>
          Homepage
        </Box>

        <Box className="flex gap-2 items-baseline px-3 py-2 border-b">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="mr-2 flex bg-white rounded-full relative top-3 md:w-10 md:h-8 h-4 w-4"
          ></Typography>

          <Box sx={{ width: '100%' }}>
            <List component="nav" aria-label="secondary mailbox folder">
              {subItems.map((item, index) => (
                <Link
                  key={index}
                  href={item === 'Yield Farms' ? '/farm' : '/createasset'}
                >
                  <ListItemButton className="!p-0">
                    <ListItemText primary={item} />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Box>
        </Box>

        <Box className="border-b flex gap-2 items-baseline px-3 py-2 ">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="mr-2 flex bg-white rounded-full relative top-3 md:w-10 md:h-8 h-4 w-4"
          ></Typography>

          <Box sx={{ width: '100%' }}>
            <List component="nav" aria-label="secondary mailbox folder">
              {subItemsAssets.map((item, index) => (
                <ListItemButton key={index} className="!p-0">
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>

        <Box className="flex gap-2 items-center px-3 py-2 border-b">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="md:mr-2 mr-0 flex bg-white rounded-full md:w-8 md:h-8 h-4 w-4"
          ></Typography>
          Audits
        </Box>

        <Box className=" flex gap-2 items-baseline px-3 py-2 ">
          <Box sx={{ width: '100%' }} className="pl-5">
            <List component="nav" aria-label="secondary mailbox folder">
              {subItemsTools.map((item, index) => (
                <ListItemButton key={index} className="!p-0">
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default MenuDropdown
