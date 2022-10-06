import './App.css';
import Nav from './Components/Nav';
import Stories from "./Components/Stories"
import Posts from "./Components/Posts"
import { auth, provider } from "./firebase/app"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useSelector, useDispatch } from 'react-redux'
import { login } from "./redux/reducers/counterSlice"

function App() {
  // const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        dispatch(login(user))
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = provider.credentialFromError(error);
        // ...
        if (error) console.log(errorCode, errorMessage)
      });
  }

  return (
    <div className="app">
      <Nav />
      <div className="app__container">
        <div className="app__body">
          <Stories />
          <Posts />
        </div>
        <div className="app__settings" onClick={signIn}>
          settings
        </div>
      </div>
    </div>
  );
}

export default App;
