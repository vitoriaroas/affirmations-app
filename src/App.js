import { useState, createContext } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Affirmations from './components/Affirmations'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container'

export const UserAuthContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  return (
    <UserAuthContext.Provider value={{user, setUser}}>
      <Header />
      <Container>
        <Affirmations />
      </Container>
      <Footer />
    </UserAuthContext.Provider>
  )
}

export default App
