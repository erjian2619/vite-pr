import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TablePage from './pages/table'
import TestPer from './pages/peformace'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <TablePage />
    <TestPer />
  )
}

export default App
