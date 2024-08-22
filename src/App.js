import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { t } from 'i18next';
import AllLinks from './Components/AllLinks';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* {t('ahmed')} */}
      <AllLinks/>
    </div>
  );
}

export default App;
