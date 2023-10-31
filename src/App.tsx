import { Route, Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;
