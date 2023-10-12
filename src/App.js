import './App.css';
import DescriptionEn from './Pages/DescriptionEn/DescriptionEn';
import HomeEn from './Pages/HomeEn/HomeEn';
import RoomsEn from './Pages/RoomsEn/RoomsEn';
import { PrimeReactProvider } from 'primereact/api';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
        


function App({Component, pageProps }) {
  return (
    <div>
      {/* <HomeEn /> */}
      {/* <RoomsEn /> */}
      <PrimeReactProvider>

      <DescriptionEn {...pageProps}/>
      </PrimeReactProvider>

    </div>
  );
}

export default App;
