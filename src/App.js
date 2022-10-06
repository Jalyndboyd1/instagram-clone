import './App.css';
import { auth, provider } from "./firebase/app"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useSelector, useDispatch } from 'react-redux'
import { login } from "./redux/reducers/counterSlice"
import Container from './Container';
import Login from './Components/Login';

function App() {
  const user = useSelector((state) => state.user.user)

  console.log(user)
  return (
    <div className="app">
      {user ? <Container/>: <Login/>}
    </div>
  );
}

export default App;
