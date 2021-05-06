import React, { useState } from 'react' 
import firebase from 'firebase'


firebase.initializeApp({
    apiKey: "AIzaSyALEuKnsLcxLwKFUvGcrJK74Ki1qicxcZ4",
    authDomain: "affirm-vr.firebaseapp.com",
    projectId: "affirm-vr",
    storageBucket: "affirm-vr.appspot.com",
    messagingSenderId: "715193081639",
    appId: "1:715193081639:web:1ff235999067bacf9fd302"
  }
)


function LoginButton() {
    const [user, setUser] = useState(null)
    const clickHandler = () => {
        if(user) {
            setUser(null)
        } else {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider)
            .then(res => setUser(res.user))
            .catch(err => alert(err))
        }

    }
    return (
        <button onClick={() => clickHandler()}>#</button>
    )
}



export default LoginButton