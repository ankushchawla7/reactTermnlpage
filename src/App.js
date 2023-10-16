import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Whatwe from './Components/Whatwe';
import Application from './Components/Application';
import ProductDevelopment from './Components/ProductDevelopment';
import ApplicationDevlopment from './Components/ApplicationDevlopment';
import Footer from './Components/Footer';

function Appik() {
  return (
    <>
      <Header />
      <Whatwe />
      <Application />
      <ProductDevelopment />
      <ApplicationDevlopment />
      <Footer />
    </>
  )
};

export default Appik;


