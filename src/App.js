import './App.css';
import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/search';
import { ContextProvider } from './Context'


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <div style={{position:"absolute", background:"black",width:"100%", padding:"0 0 10% 0"}}>
          <Navbar />
          <Search />
        </div>
          <List />
      </ContextProvider>    
    </div>
  );
}

export default App;
