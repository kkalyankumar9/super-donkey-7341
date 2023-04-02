
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Allroutes from './Routes/Route';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     

     
     <Allroutes/>
    
     </BrowserRouter>
  
    </div>
  );
  
}

export default App;
