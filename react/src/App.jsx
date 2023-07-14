import { useState } from 'react'
import './App.css'
import {UserIcon} from "@heroicons/react/20/solid/index.js";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-purple-500">
        app.jsx
        <UserIcon className="w-4"/>
    </div>
  )
}

export default App
