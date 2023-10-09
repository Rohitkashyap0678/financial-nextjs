import Box from '@mui/material/Box'
import Head from 'next/head'
import Home from '../components/Home'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box>
          <Home />
        </Box>
      </main>
    </div>
  )
}
