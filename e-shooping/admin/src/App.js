import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Main from './pages/Main';
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <>
      <main>
        <BrowserRouter>
          <Header />
          <Container>
            <Main />
          </Container>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}
export default App;
