import * as React from 'react'
import { Typography, Box } from '@mui/material'

const data = [
  {
    id: 1,
    text1: '#1',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: 'POOL:1000 USDT',
  },
  {
    id: 2,
    text1: '#2',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: 'APR: 10%',
  },
  {
    id: 3,
    text1: '#3',
    text2: 'CAKE/BNB',
    text3: '$0.0034987',
    text4: 'POOL:1000 USDT',
  },
  {
    id: 4,
    text1: '#4',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: 'POOL:1000 USDT',
  },
]

interface TableViewProps {
  TableHeaderName?: string
  className?: string
  primaryColor?: string
  secondaryColor?: string
}

const TableView: React.FC<TableViewProps> = ({
  TableHeaderName,
  className,
  primaryColor = '#00f904', // Default values for primary and secondary colors
  secondaryColor = '#ca0000',
}) => {
  return (
    <Box className="overflow-x-auto grid gap-4">
      <Typography className={`typo-lg ${className}`}>
        {TableHeaderName}
      </Typography>
      {data.map((item) => (
        <Box
          key={item.id}
          className="typo-md flex gap-6  items-center whitespace-nowrap justify-between"
        >
          <Typography
            variant="h6"
            color="initial"
            style={{
              backgroundColor: item.id === 1 ? primaryColor : 'transparent',
            }}
            className="p-2 h-8 items-center flex text-center rounded-md text-white border-none !text-sm font-semibold font-inter leading-normal"
          >
            {item.text1}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className="items-center flex text-white border-none !text-sm font-semibold font-inter leading-normal"
          >
            <Typography
              style={{ backgroundColor: primaryColor }}
              className="w-6 h-6 rounded-full mr-[6px]"
            ></Typography>
            {item.text2}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            style={{ color: secondaryColor }}
            className="ml-4 border-none !text-sm font-semibold font-inter leading-normal"
          >
            {item.text3}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className="text-white border-none !text-sm font-semibold font-inter leading-normal w-full text-end"
          >
            {item.text4}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

export default TableView
