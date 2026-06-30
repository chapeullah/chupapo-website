import './home-page.css';

import Divider from '@ui/divider/divider.jsx';

import Product from './sections/product/product.jsx';
import Hero from "./sections/hero/hero.jsx";

export default function HomePage() {
  return (
    <div className='home-page'>
      <Hero />
      <Divider />
      <Product />
    </div>
  );
}
