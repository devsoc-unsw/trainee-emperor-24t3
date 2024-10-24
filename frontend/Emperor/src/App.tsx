
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/Landing'
import { Box } from '@mui/material'

function App() {

  return (
    <Box sx={{
      minHeight: '100vh'
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
