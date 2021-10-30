import './App.css';
import GlobalStyle from './Styles/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Info from './components/Info/Info';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={HomePage} />
        
        <Route exact path="/info" component={Info} />
        
      </Switch>
    </div>
  );
}

export default App;
