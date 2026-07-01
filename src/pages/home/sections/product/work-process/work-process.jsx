import './work-process.css';

import { useLanguage } from '@i18n/use-language.js';
import Divider from '@ui/divider/divider.jsx';

export default function WorkProcess() {
  const { t } = useLanguage();
  const workProcessTexts = t.homepage.product.workProcess;

  const listWorkProcess = workProcessTexts.steps.map((step) => (
    <li className="work-process__step" key={step.title}>
      <div className="work-process__step-body">
        <h4 className="work-process__step-title">
          {step.title}
        </h4>
        <p className="work-process__step-description">
          {step.text}
        </p>
      </div>
    </li>
  ));

  return (
    <section className="work-process">

      <span className='header-chip'>Work process</span>
      <h3 className="section-layout__title">
        Процесс разработки.
      </h3>
      <p className="section-layout__description">
        Я веду проект от первого описания задачи до готовой рабочей системы, помогая сформулировать требования, разработать решение, запустить его и разобраться с использованием.
      </p>

      <Divider className="work-process__divider" />

      <div className="work-process__content">
        <ol className="work-process__steps">
          {listWorkProcess}
        </ol>
      </div>
    </section>
  );
}