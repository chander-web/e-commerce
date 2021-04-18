import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import AdminAxiosInstance from './helper/adminAxiosInstance';
import Main from './pages/Main';
const App = () => {
  return (
    <React.Fragment>
      {/* <main> */}
        <AdminAxiosInstance />
        <Header />
        <Container>
          <Main />
        </Container>
      {/* </main> */}
      <Footer />
    </React.Fragment>
  );
}
export default App;
