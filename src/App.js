import './App.css';
import GlobalStyle from './Styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <HomePage/>
    </div>
  );
}

export default App;
