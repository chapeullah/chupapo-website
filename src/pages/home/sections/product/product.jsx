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

      <div className="product__description section-layout__split">
        <h3 className="product__description-title section-layout__title section-layout__split-left">
          {productTexts.descriptionTitle}
        </h3>
        <p className="product__description-text section-layout__split-right">
          {productTexts.descriptionText}
        </p>
      </div>

      <WorkProcess />
    </section>
  );
}