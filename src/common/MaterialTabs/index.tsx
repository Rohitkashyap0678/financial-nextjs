import React, { useState, useEffect } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import styled from 'styled-components'

const StyledTab = styled(Tab)`
  &.Mui-selected {
    border-radius: 5px 0px 0px 5px;
    background: #48494d;
    color: white;
    border: none;
  }

  &.MuiTab-root {
    color: white;
  }

  &.MuiTab-textColorSecondary.Mui-selected {
    border-radius: 5px 0px 0px 5px;
    background: #48494d;
    color: white;
  }

  .MuiTabs-root {
    max-height: 33px;
    min-height: 33px;
  }

  .MuiTab-wrapper {
    border: none;
  }
`

interface ColorTabsProps {
  tabs: { value: string; label: string }[]
}

const MaterialTabs: React.FC<ColorTabsProps> = ({ tabs }) => {
  const [value, setValue] = useState<string>(tabs[0].value)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  // Use the 'useEffect' hook to set the selected tab on page refresh
  useEffect(() => {
    const storedValue = localStorage.getItem('selectedTabValue')
    if (storedValue && tabs.some((tab) => tab.value === storedValue)) {
      setValue(storedValue)
    }
  }, [tabs])

  // Save the selected tab value in local storage
  useEffect(() => {
    localStorage.setItem('selectedTabValue', value)
  }, [value])

  return (
    <Box>
      <Tabs
        value={value}
        className="!min-h-[33px] !max-h-[33px]"
        onChange={handleChange}
        sx={{
          backgroundColor: '#1F2023',
          borderRadius: '5px',
          '& .MuiTabs-indicator': {
            backgroundColor: '#48494d',
          },
        }}
      >
        {tabs.map((tab) => (
          <StyledTab
            className="!text-white bg-#48494d !text-sm !font-semibold !min-h-[33px] !max-h-[33px]"
            key={tab.value}
            value={tab.value}
            label={tab.label}
          />
        ))}
      </Tabs>
    </Box>
  )
}

export default MaterialTabs

// import React, { useState } from 'react'
// import Tabs from '@mui/material/Tabs'
// import Tab from '@mui/material/Tab'
// import Box from '@mui/material/Box'
// import styled from 'styled-components'

// const StyledTab = styled(Tab)`
//   &.Mui-selected {
//     border-radius: 5px 0px 0px 5px;
//     background: #48494d;
//     color: white;
//     border: none;
//   }

//   /* Styles for non-selected tabs */
//   &.MuiTab-root {
//     color: white; /* Set the default text color to white */
//   }

//   &.MuiTab-textColorSecondary.Mui-selected {
//     border-radius: 5px 0px 0px 5px;
//     background: #48494d; /* Keep the background color for the selected tab */
//     color: white; /* Keep the text color for the selected tab */
//   }

//   .MuiTab-wrapper {
//     border: none; /* Remove the border from all tabs */
//   }
// `

// interface ColorTabsProps {
//   tabs: { value: string; label: string }[]
// }

// const MaterialTabs: React.FC<ColorTabsProps> = ({ tabs }) => {
//   const [value, setValue] = useState<string>(tabs[0].value)

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue)
//   }

//   return (
//     <Box>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         sx={{
//           backgroundColor: '#1F2023',
//           borderRadius: '5px',
//           '& .MuiTabs-indicator': {
//             backgroundColor: '#48494d',
//           },
//         }}
//         aria-label="secondary tabs example"
//       >
//         {tabs.map((tab) => (
//           <StyledTab key={tab.value} value={tab.value} label={tab.label} />
//         ))}
//       </Tabs>
//     </Box>
//   )
// }

// export default MaterialTabs
