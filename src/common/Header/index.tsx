import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import { useEffect, useRef } from 'react' // Import useEffect, useRef, and useState
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

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = React.useState(false)

  const dropdownRef = useRef(null) // Create a ref for the dropdown menus

  const handleOpenNavMenu = (event?: any) => {
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

  useEffect(() => {
    // Add an event listener to the document to handle clicks outside the dropdown menus
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Clicked outside the dropdown menus
        setIsMenuOpen(false)
        setIsFilterDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <AppBar position="static" className="bg-black element-shadow sticky top-0">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            className="md:mr-2 mr-0 flex bg-white rounded-full md:w-12 md:h-12 h-8 w-8"
          ></Typography>

          {/* for mobile view use on 768px width */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* navigations  */}
          <Box
            className="gap-10 flex items-center justify-end"
            sx={{ flexGrow: 1 }}
          >
            <Box
              className="xl:gap-10 gap-2"
              sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu()
                    if (page === 'SERVICES') {
                      setIsMenuOpen(!isMenuOpen) // Toggle the MenuDropdown
                    } else if (page === '$TOKEN') {
                      toggleFilterDropdown() // Toggle the FilterDropdown
                    }
                  }}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
              {isMenuOpen && (
                <Box
                  className="top-[72px] left-[160px] absolute"
                  ref={dropdownRef}
                >
                  {' '}
                  <MenuDropdown />{' '}
                </Box>
              )}
              {isFilterDropdownOpen && (
                <Box
                  className="top-[72px] left-[280px] absolute"
                  ref={dropdownRef}
                >
                  <FilterDropdown />{' '}
                </Box>
              )}

              {/* Render MenuDropdown when isMenuOpen is true */}
            </Box>

            <Box className="items-center flex-grow-0 hidden xs:flex md:flex">
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                $1.67 TOKEN
              </Button>
            </Box>

            <Box className="items-center flex-grow-0 hidden xs:flex md:flex">
              <Button
                sx={{ my: 2, color: 'white', display: 'flex' }}
                className="!text-sm"
              >
                <Typography
                  noWrap
                  className="mr-2 hidden md:flex  bg-white rounded-full w-5 h-5"
                ></Typography>
                BNB Smart Chain
              </Button>
            </Box>

            <Box className="gap-10 items-center">
              <CustomButton name={'conect'} />
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

// const pages = ['TOKEN', 'SERVICES', '$TOKEN', 'DEVELOPMENT SERVICES', 'DOCS']

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null)
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false)
//   const [isFilterDropdownOpen, setIsFilterDropdownOpen] = React.useState(false) // New state variable

//   const handleOpenNavMenu = (event?: any) => {
//     setAnchorElNav(event.currentTarget)
//     setIsMenuOpen(true) // Open the menu
//   }

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null)
//     setIsMenuOpen(false) // Close the menu
//     // dd
//   }

//   // Toggle the FilterDropdown component
//   const toggleFilterDropdown = () => {
//     setIsFilterDropdownOpen(!isFilterDropdownOpen)
//   }

//   return (
//     <AppBar position="static" className="bg-black elementShadow sticky top-0">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
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
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
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
//                 <Box className="top-[72px] left-[160px] absolute">
//                   {' '}
//                   <MenuDropdown />{' '}
//                 </Box>
//               )}
//               {isFilterDropdownOpen && (
//                 <Box className="top-[72px] left-[300px] absolute">
//                   <FilterDropdown />{' '}
//                 </Box>
//               )}

//               {/* Render MenuDropdown when isMenuOpen is true */}
//             </Box>

//             <Box className="items-center flex-grow-0 hidden xs:flex md:flex">
//               <Button sx={{ my: 2, color: 'white', display: 'block' }}>
//                 $1.67 TOKEN
//               </Button>
//             </Box>

//             <Box className="items-center flex-grow-0 hidden xs:flex md:flex">
//               <Button
//                 sx={{ my: 2, color: 'white', display: 'flex' }}
//                 className="!text-sm"
//               >
//                 <Typography
//                   noWrap
//                   className="mr-2 hidden md:flex  bg-white rounded-full w-5 h-5"
//                 ></Typography>
//                 BNB Smart Chain
//               </Button>
//             </Box>

//             <Box className="gap-10 items-center">
//               <Button className="linear-gradient rounded-[30px] text-white w-24 h-[35px] capitalize ">
//                 Connect
//               </Button>
//             </Box>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   )
// }
// export default Header
