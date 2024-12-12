
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Landing } from './pages/Landing'
import { Box } from '@mui/material'
import DemoPage from './pages/DemoPage'
import { LogIn } from './pages/LogIn'
import { Calendar } from './pages/Calendar'
import { SignUp } from './pages/SignUp'

function App() {

  return (
    <Box sx={{
      minHeight: '100vh'
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/demo' element={<DemoPage />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/Calendar' element={<Calendar />} />
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
