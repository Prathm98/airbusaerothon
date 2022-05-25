import './App.css'
import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'
import { BrowserRouter as HigherRouter } from 'react-router-dom'

import Header from './components/Header'
import Router from './router'
import NoInternetComponent from './components/NoInternetComponent'
import { useEffect, useState } from 'react'

function App() {
  const [offline, setOffline] = useState(false)

  useEffect(() => {
    setInterval(() => setOffline(!navigator.onLine), 3000)
    // eslint-disable-next-line
  }, [])
  return (
    <HigherRouter>
      <Header />
      <div style={{ width: '100%', height: '60px' }}></div>
      {offline && <NoInternetComponent />}
      <div style={{ display: 'flex' }}>
        <div style={{ width: '100%' }}>
          <Router />
        </div>
      </div>
    </HigherRouter>
  )
}

export default App
