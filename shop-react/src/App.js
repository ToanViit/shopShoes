import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Index from './components/Index';
import Footer from './components/Footer';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="App">
    <Header/>
    <ProductList/>
    <Footer/>
    </div>
  );
}

export default App;
