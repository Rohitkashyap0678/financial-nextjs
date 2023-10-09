import * as React from 'react'
import HeaderText from '../../common/HeaderText'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import TableView from '../TableView'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1F2023' : '#1F2023',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  minHeight: '185px',
  borderRadius: '10px',
}))

const NewestFarms = () => {
  return (
    <div className="">
      <HeaderText headerName="YIELD FARMS" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          className="p-6"
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Item>
                <TableView />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default NewestFarms

// import * as React from 'react'
// import HeaderText from '../../common/HeaderText'
// import { experimentalStyled as styled } from '@mui/material/styles'
// import Box from '@mui/material/Box'
// import Paper from '@mui/material/Paper'
// import Grid from '@mui/material/Grid'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1F2023' : '#1F2023',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   minHeight: '185px',
//   borderRadius: '10px',
// }))

// const generateGridItems = (count: any) => {
//   const gridItems = []
//   for (let i = 0; i < count; i++) {
//     gridItems.push(
//       <Grid key={i} item xs={12} sm={12} md={4}>
//         <Item></Item>
//       </Grid>,
//     )
//   }
//   return gridItems
// }

// const NewestFarms = () => {
//   const numberOfItems = 3 // Change this to the desired number of items

//   return (
//     <div className="">
//       <HeaderText headerName="YIELD FARMS" />
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid
//           container
//           className="p-6"
//           spacing={{ xs: 2, md: 3 }}
//           columns={{ xs: 4, sm: 8, md: 12 }}
//         >
//           {generateGridItems(numberOfItems)}
//         </Grid>
//       </Box>

//       <HeaderText headerName="NEW TOKENS" />
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid
//           container
//           className="p-6"
//           spacing={{ xs: 2, md: 3 }}
//           columns={{ xs: 4, sm: 8, md: 12 }}
//         >
//           {generateGridItems(numberOfItems)}
//         </Grid>
//       </Box>
//     </div>
//   )
// }

// export default NewestFarms
