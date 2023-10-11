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

  const subItemsAssets = [
    { text: 'Assets Generator', url: '/assetsgenerator' },
    { text: 'All Assets', url: '/allassets' },
    { text: 'Create Assets', url: '/createasset' },
  ]

  const subItemsTools = [
    'Sass Tools:',
    'Bulk Sender',
    'Wallet Generator',
    'Locker',
    'Audits',
  ]

  return (
    <div className="bg-black   min-w-[300px] relative !z-50 ">
      <Box className="border-spacing-1 border-[#48494D]  rounded-[30px] border-2 opacity-90">
        <Link href="/" passHref>
          <Box className="flex ml-2 cursor-pointer gap-2 !text-xs !font-semibold items-center px-3 pt-2 pb-1 border-b border-[#48494D]">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              className="md:mr-2 mr-0 flex bg-white rounded-full w-[26px] h-[26px] "
            ></Typography>
            Homepage
          </Box>
        </Link>

        <Box className="flex gap-2 ml-2 items-baseline !text-xs !font-semibold px-3 !py-0 border-b border-[#48494D]">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="mr-2 flex bg-white rounded-full  relative top-3 !min-w-[26px] h-[26px] "
          ></Typography>

          <Box sx={{ width: '100%' }}>
            <List component="nav" aria-label="secondary !py-0 mailbox folder">
              {subItems.map((item, index) => (
                <Link
                  key={index}
                  passHref
                  href={
                    item === 'Yield Farms' ? '/Yield-Farms' : '/createasset'
                  }
                >
                  <ListItemButton className="!p-0 !text-xs !font-semibold">
                    <ListItemText
                      className="!m-0 !text-xs !font-semibold list-item-text"
                      primary={item}
                    />
                  </ListItemButton>
                </Link>
              ))}
            </List>
          </Box>
        </Box>

        <Box className="border-b ml-2 border-[#48494D] flex gap-2 items-baseline !text-xs !font-semibold px-3 !pt-0 pb-1">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="mr-2 flex bg-white rounded-full relative top-3 !min-w-[26px] h-[26px] "
          ></Typography>

          <Box sx={{ width: '100%' }} className="!text-xs !font-semibold">
            <List
              component="nav"
              className="!text-xs !py-0  !font-semibold"
              aria-label="secondary mailbox folder"
            >
              {subItemsAssets.map((item, index) => (
                <ListItemButton
                  key={index}
                  className="!p-0 !text-xs !font-semibold"
                >
                  <Link passHref href={item.url}>
                    <ListItemText
                      className="!m-0 !text-xs !font-semibold list-item-text"
                      primary={item.text} // Use item.text, not item
                    />
                  </Link>
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>

        <Box className="flex gap-2 ml-2 items-center px-3 !text-xs !font-semibold py-1 border-b border-[#48494D]">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className="md:mr-2 mr-0 flex bg-white rounded-full w-[26px] h-[26px] "
          ></Typography>
          Audits
        </Box>

        <Box className=" flex gap-2 ml-2 items-baseline px-3 pt-2 pb-2 ">
          <Box sx={{ width: '100%' }} className="pl-1">
            <List
              component="nav"
              className="!py-0 "
              aria-label="secondary mailbox folder"
            >
              {subItemsTools.map((item, index) => (
                <ListItemButton key={index} className="!p-0">
                  <ListItemText
                    className="!m-0 list-item-text"
                    primary={item}
                  />
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
