import './App.css';
import { useState } from 'react';
import Register from './components/Register';

function App() {
  const [light, setLight] = useState('Off');
  return (
    <>
      <Register />
    </>
  )
}

export default App;
