import './home-page.css';

import Divider from '@ui/divider/divider.jsx';

import Product from './product/product.jsx';
import Hero from './hero/hero.jsx';

export default function HomePage() {
  return (
    <div className='home-page'>
      <Hero />
      <Divider />
      <Product />
    </div>
  );
}
