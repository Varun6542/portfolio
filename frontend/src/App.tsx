
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './pages'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>} />
        {/* <Route path='*' /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
