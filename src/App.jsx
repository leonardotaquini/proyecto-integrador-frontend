import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

export default App;
