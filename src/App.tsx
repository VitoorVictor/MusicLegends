import Footer from "./components/Footer";
import Header from "./components/Header";  
import React, {useEffect, useState,useRef,useMemo} from 'react';

function App() {  
  interface Music {
    title: string;
    artist: string;
    filePath: string;
  }

  const backgroundImg:string = 'url("/img/background.png")';
  const musicList: Music[] = useMemo(() => [
    { title: 'Legends Never Die', artist: 'Against The Current', filePath: '/musics/Legends Never Die.mp3' },
    { title: 'Rise', artist: 'League of Legends', filePath: '/musics/Rise.mp3' },
    { title: 'Warriors', artist: 'Imagine Dragons', filePath: '/musics/Warriors.mp3' },
    { title: 'Take Over', artist: 'The Glitch Mob', filePath: '/musics/Take Over.mp3' },
    { title: 'Giants', artist: 'True Damage', filePath: '/musics/Giants.mp3' },
    { title: 'Awaken', artist: 'Valorant', filePath: '/musics/Awaken.mp3' },
    { title: 'Pop Stars', artist: 'K/DA', filePath: '/musics/Pop Stars.mp3' },
  ], []);
  const [indexMusic , setIndexMusic] = useState<number>(0);
  const [shouldAutoplay, setShouldAutoplay] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); 


  useEffect(() => {
    if (audioRef.current && shouldAutoplay) {
      audioRef.current.src = musicList[indexMusic].filePath;
      audioRef.current.play();
      setShouldAutoplay(false); // Reset autoplay state
    }
  }, [indexMusic, musicList, shouldAutoplay]);

  return (
    <div className="App flex flex-col justify-center items-center   h-screen bg-center bg-cover overflow-hidden"
    style={{backgroundImage : backgroundImg }}>
      
      <Header />
      <div className="music-player ">
        <audio ref={audioRef} src={musicList[indexMusic].filePath}/>
      </div>
      <Footer audioRef={audioRef} setIndexMusic={setIndexMusic} indexMusic={indexMusic} musicList={musicList} setShouldAutoplay={setShouldAutoplay} />

    </div>
  );
  
}

export default App;

