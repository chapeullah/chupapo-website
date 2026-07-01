import './product.css';

import WorkProcess from './work-process/work-process.jsx';
import ServiceCards from "./service-cards";

import { useLanguage } from "@i18n/use-language.js";

export default function Product() {
  const { t } = useLanguage();
  const productTexts = t.homepage.product;

  return (
    <section id={"product"} className="product">
      <div className="product__header section-layout__header">
        <h1 className="product__header-label section-layout__header-label">
          {productTexts.headerLabel}
        </h1>
        <h2 className="product__header-title section-layout__header-title">
          {productTexts.headerTitle}
        </h2>
      </div>

      <ServiceCards />

      <WorkProcess />
    </section>
  );
}