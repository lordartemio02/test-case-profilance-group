import './App.scss';
import Header from './components/header';
import { useSelector } from 'react-redux'

const App = () => {
  const username = useSelector((state) => state.user.username)
  return (
    <div className="container">
      <Header />
      Привет {username}
    </div>
  );
}

export default App;
