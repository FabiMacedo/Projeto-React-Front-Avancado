import {lazy, Suspense} from 'react';

/* Importação comum
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
 */

//importação dos componentes usando a função "lazy".
const Header = lazy(() => import('./components/Header'));
const Main = lazy(() => import('./components/Main'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      
        <Suspense fallback={ <h2>Aguarde enquanto carrega o Header</h2> }>
          <Header />
        </Suspense>

        <Suspense fallback={ <h2>Aguarde enquanto carrega o Main</h2> }>
          <Main />
        </Suspense> 

        <Suspense fallback={ <h2>Aguarde enquanto carrega o Footer</h2> }>
          <Footer />
        </Suspense>
    </div>
  );
}

export default App;