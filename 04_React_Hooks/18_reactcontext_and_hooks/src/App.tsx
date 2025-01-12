import './App.css'
import { CounterContextProvider } from './contexts/CounterContext'
import Home from './templates/Home'

function App() {
  return (
    <>
      <CounterContextProvider>
        <Home />
      </CounterContextProvider>
    </>
  )
}

export default App
