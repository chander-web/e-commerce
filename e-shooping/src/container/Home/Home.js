import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Spinner from '../../components/spinner/Spinner';
import TopMenu from '../../components/TopMenu';
import Routes from '../../routes/Routes';
import './Home.css';





function Home() {

    return (
        <>
            <Spinner />
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