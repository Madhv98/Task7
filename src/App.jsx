import { useState } from 'react';
import './App.css';
import Headers from './component/header.jsx'
import MainContent from './content/main-cont.jsx'

function App() {
  const [count, setCount] = useState(0);

  return<>
  <Headers/>
  <MainContent/>

  
  </>;
}


export default App
