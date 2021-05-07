import React, { useContext, useState } from 'react'
import LoginButton from './LoginButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import PostNew from '../PostNew'
import { UserAuthContext } from '../../App'
import './header.css'

function Header() {
  const { user } = useContext(UserAuthContext)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
    <Navbar className="justify-content-between">
      <Navbar.Brand className="navbar-brand">Affirmations</Navbar.Brand>
      <Nav>
        {user && <button className="add-button" type="button" class="btn btn-warning" onClick={() => setShowModal(true)}>Create</button>}
        <Nav.Link>
          <LoginButton />
        </Nav.Link>
      </Nav>
    </Navbar>
    <PostNew show={showModal} onHide={() => setShowModal(false)} />
    </>
  )
}

export default Header
