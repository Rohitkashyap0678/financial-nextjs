import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import styles from './index.module.scss'

const pages = ['TOKEN', 'SERVICES', 'DEVELOPMENT SERVICES', 'DOCS']

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event?: any) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" className="bg-black elementShadow">
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
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
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
              <Button
                className={`rounded-[30px] text-white w-24 h-[35px] capitalize ${styles.linearGradient}`}
              >
                Connect
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
