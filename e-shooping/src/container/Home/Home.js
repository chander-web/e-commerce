import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TopMenu from '../../components/TopMenu';
import Routes from '../../routes/Routes';
import './Home.css';




function Home() {
    return (
        <>
            <Header />
            <TopMenu />
            <Routes />
            <Footer />
        </>
    );
}

export default Home;