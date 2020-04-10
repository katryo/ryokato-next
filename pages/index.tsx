import { ThemeProvider } from '@chakra-ui/core'
import React from 'react'
import Content from '../components/content'
import Head from '../components/head'

const App = () => {
  return (
    <ThemeProvider>
      <Head title="Ryo Kato" description="Ryo Kato is a person." />
      <Content />
    </ThemeProvider>
  )
}

export default App
