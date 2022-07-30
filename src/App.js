import "./tailwind.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import Movies from "./Components/Movies"
import Series from "./Components/Series"
import { veri } from "./data"

function App() {

  let movie = [], serie = [];
  veri.map(data => (data.programType=="movie")==true?movie.push(data):serie.push(data)) 
  //Map fonksiyonu kullanarak Toplu veriyi türüne göre kontrol ederek dizilere gönderiyorum.
  
  return (
    <div className="flex flex-col min-h-screen">
      {/*Router dom ile sayfalar arası geçiş*/}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          {/*props yardımıyla dizileri component'e aktarıyorum.*/}
          <Route path="/Movies" element={<Movies film={movie}/>} />
          <Route path="/Series" element={<Series dizi={serie}/>} />
        </Routes>
        <Footer />
      </Router>

    </div>


  );
}

export default App;
