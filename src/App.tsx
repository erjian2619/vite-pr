import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TablePage from './pages/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TablePage />
  )
}

export default App
