import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  const apiUrl = import.meta.env.VITE_APP_API_URL // 使用 Vite 的环境变量

  console.log('VITE_APP_API_URL:1', apiUrl)
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
