import { Route, Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Layout from './components/Layout/Layout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.config';
import Login from './components/Login/Login';

function App() {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;
