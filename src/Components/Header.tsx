import React from 'react'
import DateRange from './DateRange'
import Meses from './Meses'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const [title, setTitle] = React.useState('Resumo')

  React.useEffect(() => {
    switch (location.pathname) {
      case '/':
        setTitle('Resumo')
        document.title = 'Fintech | Resumo'
        break
      case '/vendas':
        setTitle('Vendas')
        document.title = 'Fintech | Vendas'
        break
      default:
        return
    }
  }, [location])

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  )
}

export default Header