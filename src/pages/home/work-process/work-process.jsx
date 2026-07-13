import "./work-process.css";

import { useLanguage } from "@i18n/use-language.js";
import { workProcessSteps } from "@pages/home/work-process/work-process-steps.js";

export default function WorkProcess() {
  const { t } = useLanguage();
  const i18n = t.workProcess;

  const listWorkProcess = i18n.steps.map((step) => {
    const processStep = workProcessSteps.find(
      (item) => item.id === step.id
    );

    const Icon = processStep?.icon;

    return (
      <li className="work-process__step" key={step.id}>
        <div className="work-process__step-body">
          <div className="work-process__header">
            {Icon && <Icon className="work-process__step-icon" />}
            <h4 className="work-process__step-title">{step.title}</h4>
          </div>

          <p className="work-process__step-description">
            {step.description}
          </p>
        </div>
      </li>
    );
  });

  return (
    <section className="work-process">
      <div className="work-process__content">
        <div
          className="work-process__gradient"
          aria-hidden="true"
        />

        <header className="section-layout__header-center">
          <span className="section-layout__chip">{i18n.header.chip}</span>
          <h3 className="section-layout__title">{i18n.header.title}</h3>
          <p className="section-layout__description">{i18n.header.description}</p>
        </header>

        <ol className="work-process__steps">
          {listWorkProcess}
        </ol>
      </div>
    </section>
  );
}
