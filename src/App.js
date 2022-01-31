import logo from './logo.svg';
import './App.css';
import Qrcode from './Components/Qrcode.js';
import Nft from './Components/Nft.js';

function App() {
  return (
    <div className="App">
      <Qrcode />
      <Nft />
    </div>
  );
}

export default App;
