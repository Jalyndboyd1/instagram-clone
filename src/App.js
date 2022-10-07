import './App.css';
import { useSelector } from 'react-redux'
import Container from './Container';
import Login from './Components/Login';

function App() {
  const user = useSelector((state) => state.user.user)

  console.log(user)
  return (
    <div className="app">
      {user ? <Container/> : <Login/>}
    </div>
  );
}

export default App;
