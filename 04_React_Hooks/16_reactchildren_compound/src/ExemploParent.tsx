import { Children, cloneElement, isValidElement, ReactNode } from 'react'
import './App.css'

const s = {
  style: {
    color: 'red',
    fontSize: '60px'
  }
}

const s2 = {
  style: {
    color: 'purple',
    fontSize: '60px'
  }
}

const Parent = ({ children }: { children: ReactNode }) => {
  return Children.map(children, (child) => {
    if (!isValidElement(child))
      return child;

    return cloneElement(child, { ...s2 });
  });
}

function App() {
  return (
    <>
      <Parent>
        <p>Oi</p>
        <p>Oi2</p>
      </Parent>
      <div {...s} >
        oi
      </div>
    </>
  )
}

//export default App
