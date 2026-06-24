import './work-process.css';

import { useLanguage } from '@i18n/use-language.js';

export default function WorkProcess() {
  const { t } = useLanguage();
  const workProcessTexts = t.homepage.product.workProcess;

  return (
    <section className="work-process">
      <h3 className="work-process__title section-layout__title">
        {workProcessTexts.title}
      </h3>

      <div className="work-process__content">
        <ol className="work-process__steps">
          {workProcessTexts.steps.map((step) => (
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
          ))}
        </ol>
      </div>
    </section>
  );
}