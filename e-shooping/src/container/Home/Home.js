import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import AxiosInstanceCopy from '../../helpers/axiosInstance';
import Routes from '../../routes/Routes';
import './Home.css';
const React = require('react');






function Home() {

  return (
    <React.Fragment>
      <AxiosInstanceCopy />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
      />

      <Header />
      <TopMenu />
      <Routes />
      <Footer />
    </React.Fragment>
  );
}

export default Home;