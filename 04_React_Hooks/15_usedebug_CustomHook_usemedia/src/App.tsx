import { useDebugValue, useEffect, useState } from 'react'
import './App.css'

const useMediaQuery = (query: string) => {
  const mediaQuery = window.matchMedia(query)
  const [matches, setMatches] = useState(mediaQuery.matches)

  useDebugValue(matches ? 'matches' : 'does not match'); //só aparece no React DevTools

  useEffect(() => {
    const handler = () => setMatches(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [mediaQuery])

  return matches
}

function App() {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 322px)');
  const small = useMediaQuery('(max-width: 321px)');
  const background = huge ? 'green' : big ? 'red' : medium ? 'yellow' : small ? 'purple' : 'black'
  return (
    <div style={{ fontSize: '60px', background }}>
      oi
    </div>
  )
}

export default App
