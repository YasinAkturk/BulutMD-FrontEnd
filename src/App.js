import "./tailwind.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Main from "./Components/Main"
import Movies from "./Components/Movies"

function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
