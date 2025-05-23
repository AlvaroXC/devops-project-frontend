import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AuthLayout } from './layout/AuthLayout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>       
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
