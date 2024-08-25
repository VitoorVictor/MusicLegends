import Footer from "./components/Footer";
import Header from "./components/Header";  
import React, { useRef} from 'react';

function App() {  
  const backgroundImg:string = 'url("/img/background.png")';
  
  const audioRef = useRef<HTMLAudioElement | null>(null); 


  return (
    <div className="App flex flex-col justify-center items-center h-screen bg-center bg-cover"
    style={{backgroundImage : backgroundImg }}>
      
      <Header />
      <div className="music-player ">
        <audio ref={audioRef} src="/songs/Warriors.mp3"/>
      </div>
      <Footer audioRef={audioRef} />

    </div>
  );
}

export default App;
