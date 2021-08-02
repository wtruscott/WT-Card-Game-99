import './App.css';
import Landing from './pages/Landing'
import Game from './pages/Game'

function App() {
  return (
    <div className="App">
      <Nav/>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route path="/game">
            <Game/>
          </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
