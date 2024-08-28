
import Footer from "./components/Footer";
import Header from "./components/Header";  

function App() {  

  const backgroundImg:string = 'url("/img/background.png")';

  return (
    <div className="App flex flex-col h-screen justify-between bg-cover bg-no-repeat" 
    style={{backgroundImage : backgroundImg}}
    >
      <Header />
      <div className="flex-1"></div>
      <Footer/>
    </div>
    
  );
  
}

export default App;

