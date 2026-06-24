import './homepage.css';

import Divider from '@ui/divider/divider.jsx';

import Product from './sections/product/product.jsx';
import About from './sections/about/about.jsx';
import Contacts from './sections/contacts/contacts.jsx';
import Hero from "./sections/hero/hero.jsx";

export default function Homepage() {
  return (
    <div className='homepage'>
      <Hero />
      <Divider />
      <Product />
      <Divider />
      <About />
      <Divider />
      <Contacts />
    </div>
  );
}
