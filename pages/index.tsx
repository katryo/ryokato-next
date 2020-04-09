import { ThemeProvider } from '@chakra-ui/core'
import React from 'react'
import Content from '../components/content'

const App = () => {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  )
}

export default App
