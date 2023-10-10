import * as React from 'react'
import { Typography, Box } from '@mui/material'

const data = [
  {
    id: 1,
    primaryColor: '--primary-color',
    secondaryColor: '--secondary-color',
    text1: '#1',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: 'POOL:1000 USDT',
  },
  {
    id: 2,
    primaryColor: '--primary-color',
    secondaryColor: '--primary-color',
    text1: '#2',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: 'APR: 10%',
  },
  {
    id: 3,
    primaryColor: '--primary-color',
    secondaryColor: '--secondary-color',
    text1: '#3',
    text2: 'CAKE/BNB',
    text3: '$0.0034987',
    text4: 'POOL:1000 USDT',
  },
  {
    id: 4,
    primaryColor: '--primary-color',
    secondaryColor: '--primary-color',
    text1: '#4',
    text2: 'CAKE/BNB',
    text3: '$0.0000987',
    text4: 'POOL:1000 USDT',
  },
]

interface TableViewProps {
  TableHeaderName?: string
  className?: string
}

const TableView: React.FC<TableViewProps> = ({
  TableHeaderName,
  className,
}) => {
  return (
    <Box className="overflow-x-auto grid gap-4">
      <Typography variant="h6" className={className}>
        {TableHeaderName}
      </Typography>
      {data.map((item) => (
        <Box
          key={item.id}
          className="flex gap-6 items-center whitespace-nowrap justify-between"
        >
          <Typography
            variant="h6"
            color="initial"
            className={`${
              item.id === 1 ? 'bg-[--primary-color]' : ''
            } !p-2 h-8 items-center flex text-center rounded-md text-white border-none !text-sm font-semibold font-inter leading-normal`}
          >
            {item.text1}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className="items-center flex text-white border-none !text-sm font-semibold font-inter leading-normal"
          >
            <Typography
              className={`w-6 h-6 bg-[${item.primaryColor}] rounded-full mr-[6px]`}
            ></Typography>
            {item.text2}
          </Typography>
          <Typography
            variant="h6"
            color="initial"
            className={`text-[${item.secondaryColor}] ml-4 border-none !text-sm font-semibold font-inter leading-normal`}
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
