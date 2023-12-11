import React from 'react'
import {
  Routes,
  Route,
  useParams,
  useLocation,
} from 'react-router-dom'

const Calculator = () => {
  const { operation } = useParams()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const x = parseFloat(searchParams.get('x'))
  const y = parseFloat(searchParams.get('y'))
  console.log(operation)

  const calculateResult = () => {
    switch (operation) {
      case 'add':
        return x + y
      case 'sub':
        return x - y
      case 'mul':
        return x * y
      case 'div':
        return y !== 0 ? x / y : 'Cant divide by zero'
      default:
        return 'Invalid operation'
    }
  }

  const result = calculateResult(operation)

  return (
    <div>
      <h2>Wynik: {result}</h2>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Wpisz adres w formie /operacja?x=a&y=b</h1>
            <p>dozwolone operacje to add, sub, mul i div</p>
          </div>
        }
      ></Route>
      <Route path=":operation" element={<Calculator />} />
    </Routes>
  )
}
