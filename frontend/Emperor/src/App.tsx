
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/Landing'
import { Box } from '@mui/material'
import DemoPage from './pages/DemoPage'

function App() {

  return (
    <Box sx={{
      minHeight: '100vh'
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/demo' element={<DemoPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
