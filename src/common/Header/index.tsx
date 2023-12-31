// // for use hover menubar
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import MenuDropdown from '../../components/MenuDropdown'
import FilterDropdown from '../FilterDropdown'
import CustomButton from '../Custom/CustomButton'

const pages = ['TOKEN', 'SERVICES', '$TOKEN', 'DEVELOPMENT SERVICES', 'DOCS']

const subItemsTools = [
  'Buy On BSC',
  'Buy on CSC',
  'Website',
  'Dashboard',
  'Whitepaper',
]

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false)

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
    setIsMenuOpen(true)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
    setIsMenuOpen(false)
  }

  const toggleFilterDropdown = () => {
    setIsFilterDropdownOpen(!isFilterDropdownOpen)
  }

  const handleMouseEnter = (page: any) => {
    if (page === 'SERVICES') {
      setIsMenuOpen(true)
    } else if (page === '$TOKEN') {
      toggleFilterDropdown()
    }
  }

  const handleMouseLeave = () => {
    setIsMenuOpen(false)
    setIsFilterDropdownOpen(false)
  }

  const openNewWindowThisWebsite = () => {
    // Replace 'https://your-website-url.com' with the actual website URL
    const websiteUrl = 'http://localhost:3000/'
    window.open(websiteUrl, '_blank')
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false)
        setIsFilterDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <AppBar position="static" className="bg-[#1F2023] sticky top-0 z-10">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            height="48px"
            width="46px"
            variant="h6"
            noWrap
            component="a"
            onClick={openNewWindowThisWebsite}
            href="/"
            className="md:mr-2 mr-0 flex bg-white rounded-full md:w-12 md:h-12 h-8 w-8"
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of the current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{ fontSize: '15px', fontWeight: '600' }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            className="gap-10 flex items-center justify-end"
            sx={{ flexGrow: 1 }}
          >
            <Box
              className="xl:gap-10 gap-2"
              sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}
            >
              {pages.map((page) => (
                <div
                  key={page}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(page)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button
                    className="!text-[15px] !font-semibold"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                  {page === 'SERVICES' && isMenuOpen && (
                    <Box
                      className="top-[53px] left-0 !z-50 absolute"
                      ref={dropdownRef}
                    >
                      <MenuDropdown />
                    </Box>
                  )}
                  {page === '$TOKEN' && isFilterDropdownOpen && (
                    <Box
                      className="top-[53px] left-0 z-20 absolute"
                      ref={dropdownRef}
                    >
                      <FilterDropdown subItemsTools={subItemsTools} />
                    </Box>
                  )}
                </div>
              ))}
            </Box>

            <Box className="items-center flex-grow-0 hidden xs:flex md:flex">
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                className="!text-[15px] !font-semibold"
              >
                $1.67 TOKEN
              </Button>
            </Box>

            <Box className="items-center flex-grow-0 hidden xs:flex md:flex">
              <Button
                sx={{ my: 2, color: 'white', display: 'flex' }}
                className="!text-xs !font-medium rounded-[30px] px-4 !bg-[#151618]"
              >
                <Typography
                  noWrap
                  className="typo-sm mr-2 hidden md:flex  bg-white rounded-full w-5 h-5"
                ></Typography>
                BNB Smart Chain
              </Button>
            </Box>

            <Box className="gap-10 items-center">
              <CustomButton
                onClick={openNewWindowThisWebsite}
                classname="!text-[15px] !font-medium"
                name={'connect'}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

// import * as React from 'react'
// import AppBar from '@mui/material/AppBar'
// import { useEffect, useRef } from 'react' // Import useEffect, useRef, and useState
// import Box from '@mui/material/Box'
// import Toolbar from '@mui/material/Toolbar'
// import IconButton from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import Menu from '@mui/material/Menu'
// import MenuIcon from '@mui/icons-material/Menu'
// import Container from '@mui/material/Container'
// import Button from '@mui/material/Button'
// import MenuItem from '@mui/material/MenuItem'
// import MenuDropdown from '../../components/MenuDropdown'
// import FilterDropdown from '../FilterDropdown'
// import CustomButton from '../Custom/CustomButton'

// const pages = ['TOKEN', 'SERVICES', '$TOKEN', 'DEVELOPMENT SERVICES', 'DOCS']

// const subItemsTools = [
//   'Buy On BSC',
//   'Buy on CSC',
//   'Website',
//   'Dashboard',
//   'Whitepaper',
// ]

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null)
//   const dropdownRef = useRef<HTMLDivElement | null>(null)
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false)
//   const [isFilterDropdownOpen, setIsFilterDropdownOpen] = React.useState(false)

//   // const dropdownRef = useRef(null) // Create a ref for the dropdown menus

//   const handleOpenNavMenu = (event?: any) => {
//     setAnchorElNav(event.currentTarget)
//     setIsMenuOpen(true)
//   }

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null)
//     setIsMenuOpen(false)
//   }

//   const toggleFilterDropdown = () => {
//     setIsFilterDropdownOpen(!isFilterDropdownOpen)
//   }

//   useEffect(() => {
//     // Add an event listener to the document to handle clicks outside the dropdown menus
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         // Clicked outside the dropdown menus
//         setIsMenuOpen(false)
//         setIsFilterDropdownOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)

//     return () => {
//       // Remove the event listener when the component unmounts
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   return (
//     <AppBar position="static" className="bg-[#1F2023] sticky top-0 z-10">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             height="48px"
//             width="46px"
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             className="md:mr-2 mr-0 flex bg-white rounded-full md:w-12 md:h-12 h-8 w-8"
//           ></Typography>

//           {/* for mobile view use on 768px width */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem
//                   sx={{ fontSize: '15px', fontWeight: '600' }}
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                 >
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* navigations  */}
//           <Box
//             className="gap-10 flex items-center justify-end"
//             sx={{ flexGrow: 1 }}
//           >
//             <Box
//               className="xl:gap-10 gap-2"
//               sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}
//             >
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   className="!text-[15px] !font-semibold"
//                   onClick={() => {
//                     handleCloseNavMenu()
//                     if (page === 'SERVICES') {
//                       setIsMenuOpen(!isMenuOpen) // Toggle the MenuDropdown
//                     } else if (page === '$TOKEN') {
//                       toggleFilterDropdown() // Toggle the FilterDropdown
//                     }
//                   }}
//                   sx={{ my: 2, color: 'white', display: 'block' }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//               {isMenuOpen && (
//                 <Box
//                   className="top-[53px] left-[160px] !z-50 absolute"
//                   ref={dropdownRef}
//                 >
//                   {' '}
//                   <MenuDropdown />{' '}
//                 </Box>
//               )}
//               {isFilterDropdownOpen && (
//                 <Box
//                   className="top-[53px] left-[280px] z-20 absolute"
//                   ref={dropdownRef}
//                 >
//                   <FilterDropdown subItemsTools={subItemsTools} />{' '}
//                 </Box>
//               )}

//               {/* Render MenuDropdown when isMenuOpen is true */}
//             </Box>

//             <Box className="items-center flex-grow-0 hidden xs:flex md:flex">
//               <Button
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//                 className="!text-[15px] !font-semibold"
//               >
//                 $1.67 TOKEN
//               </Button>
//             </Box>

//             <Box className="items-center flex-grow-0 hidden xs:flex md:flex">
//               <Button
//                 sx={{ my: 2, color: 'white', display: 'flex' }}
//                 className="!text-xs !font-medium rounded-[30px] px-4 !bg-[#151618]"
//               >
//                 <Typography
//                   noWrap
//                   className="typo-sm mr-2 hidden md:flex  bg-white rounded-full w-5 h-5"
//                 ></Typography>
//                 BNB Smart Chain
//               </Button>
//             </Box>

//             <Box className="gap-10 items-center">
//               <CustomButton
//                 classname="!text-[15px] !font-medium"
//                 name={'conect'}
//               />
//             </Box>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   )
// }
// export default Header
