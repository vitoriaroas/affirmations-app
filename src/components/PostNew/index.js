import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { UserAuthContext, AffirmationsContext } from '../../App'

function PostNew(props) {
  const [newText, setNewText] = useState('')
  const { user } = useContext(UserAuthContext)
  const { setAffirmationList } = useContext(AffirmationsContext)
  const handleSubmit = () => {
    const newAffirmation = {
      text: newText,
      uid: user.uid,
      displayName: user.displayName,
      photUrl: user.photUrl,
    }
    fetch('https://affirm-bc-api.web.app/affirmations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAffirmation),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewText('')
        props.onHide()
        setAffirmationList(data)
      })
      .catch((err) => console.log(err))
  }
  return (
    <Modal {...props} centered>
      <Modal.Header closeButton>
        <Modal.Title>Post an Affirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          rows="3"
          cols="40"
        >
          Your affirmation here...
        </textarea>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => handleSubmit()}>Save</button>
      </Modal.Footer>
    </Modal>
  )
}

export default PostNew
