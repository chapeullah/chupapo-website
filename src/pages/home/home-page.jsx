import './home-page.css';

import Divider from '@ui/divider/divider.jsx';

import Header from "@widgets/header/header.jsx";
import Footer from "@widgets/footer/footer.jsx";

import Product from './sections/product/product.jsx';
import About from './sections/about/about.jsx';
import Contacts from './sections/contacts/contacts.jsx';
import Hero from "./sections/hero/hero.jsx";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className='home-page'>
        <Hero />
        <Divider />
        <Product />
        <Divider />
        <About />
        <Divider />
        <Contacts />
      </div>
      <Footer />
    </>
  );
}
