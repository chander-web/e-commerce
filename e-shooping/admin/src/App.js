import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Main from './pages/Main';
import AxiosInstanceCopy from '../../admin/src/helper/axiosInstance';
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <main>
          <AxiosInstanceCopy />
          <Header />
          <Container>
            <Main />
          </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}
export default App;
