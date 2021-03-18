import logo from './logo.svg';
import './App.css';
import TempApp from './cpmponents/TempApp';

function App() {
  return (
     <div style={{    display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '150px',}}>
       <TempApp/>
     </div>
  );
}

export default App;
