import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feedback from './components/FeedBackForm.jsx'
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="max-h-screen bg-gray-100">
      <Home />
    </div>

  )
}

export default App
