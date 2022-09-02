import './App.css';
import { MyNavbar } from './components/MyNavbar';
import { MainContent } from './components/MainContent';
import { useState } from 'react';

function App() {

  const [dark, setDark] = useState('');

  const toggleDark = () => {
    setDark( (prevState) => prevState ? '' : 'Dark' )
  }

  return (
    <div className={`App ${dark}`}>
      < MyNavbar         
        toggleDark={toggleDark}
      />
      < MainContent 
        dark={dark}
      />
    </div>
  )
}

export default App;
