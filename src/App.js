
import './App.css';
import Appointments from './components/Appointments';
import Comments from './components/Comments';
import MoneyManager from './components/MoneyManager';

function App() {
  return (
    <div className="App">
         <Comments/>  
      <Appointments/> 
       <MoneyManager/> 
    </div>
  );
}

export default App;
