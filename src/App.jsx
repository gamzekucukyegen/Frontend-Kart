import { useState } from 'react';
import './styles.css';
import Header from './components/Header';
import FrontMessage from './components/FrontMessage';
import InnerMessage from './components/InnerMessage';

export default function App() {
  const [kartAcik, setKartAcik] = useState(false);
  const [mouseBaslangicX, setMouseBaslangicX] = useState(null);
  const [mouseBasiliMi, setMouseBasiliMi] = useState(false);

  const mouseBasmaIslemi = (event) => {
    setMouseBasiliMi(true);
    setMouseBaslangicX(event.clientX);
  };

  const mouseHareketIslemi = (event) => {
    if (mouseBasiliMi && mouseBaslangicX !== null) {
      if (event.clientX < mouseBaslangicX - 50) {
        setKartAcik(true);
      }
      if (kartAcik && event.clientY > event.target.offsetTop + 50) {
        setKartAcik(false);
      }
    }
  };

  const mouseBirakmaIslemi = () => {
    setMouseBasiliMi(false);
    setMouseBaslangicX(null);
  };

  return (
    <div className='wrapper'>
      <Header />
      <div className='card'>
        <InnerMessage />
        <div
          onMouseDown={mouseBasmaIslemi}
          onMouseMove={mouseHareketIslemi}
          onMouseUp={mouseBirakmaIslemi}
          className={`cover ${kartAcik ? 'open' : ''}`}
        >
          <FrontMessage />
          <img src='./images/forLoop.png' alt='Cover' />
        </div>
      </div>
    </div>
  );
}
