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





function Home() {

    return (
        <>
            <AxiosInstanceCopy />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover
            />
            <Header />
            <TopMenu />
            <Routes />
            <Footer />
        </>
    );
}

export default Home;