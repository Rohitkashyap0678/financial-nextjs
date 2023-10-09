import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

function createData(
  id: string,
  labelName: number,
  amount: number,
  valueText: number,
) {
  return { id, labelName, amount, valueText }
}

const rows = [
  createData('#1', 'CAKE/BNB', '$0.000987', ' POOL: 1000 USDT'),
  createData('#2', 'CAKE/BNB', '$0.000987', ' POOL: 1000 USDT'),
  createData('#3', 'CAKE/BNB', '$0.000987', ' POOL: 1000 USDT'),
  createData('#4', 'CAKE/BNB', '$0.000987', ' POOL: 1000 USDT'),
  createData('#5', 'CAKE/BNB', '$0.000987', ' POOL: 1000 USDT'),
]

const TableView = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table bg-black">
        <TableBody className="bg-black">
          {rows.map((row) => (
            <StyledTableRow key={row.id} className="bg-black">
              <StyledTableCell
                className="bg-green-500 !p-2 !h-fit rounded-md text-white border-none"
                component="th"
                scope="row"
              >
                {row.id}
              </StyledTableCell>
              <StyledTableCell
                className="bg-black items-center flex text-white border-none"
                align="right"
              >
                {row.labelName}
                <Typography className="w-5 h-5 bg-green-500 rounded-full mr-1"></Typography>
              </StyledTableCell>
              <StyledTableCell
                className="bg-black text-green-600 border-none"
                align="right"
              >
                {row.amount}
              </StyledTableCell>
              <StyledTableCell
                className="bg-black text-white border-none"
                align="right"
              >
                {row.valueText}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableView
