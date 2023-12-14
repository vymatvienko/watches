import './App.css'
import Form from './components/Form.tsx'
import Data from './components/Data.tsx'
import { useState } from 'react'

function App() {

  const [watches, setWatches] = useState([]);

  return (
    <>
      <div className="container">
        <Form watches={watches} setWatches={setWatches}/>
        <Data watches={watches} setWatches={setWatches}/>
      </div>
    </>
  )
}

export default App
