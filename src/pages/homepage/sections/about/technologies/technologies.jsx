import './technologies.css';

import JavaLogo from '@logos/java/java-logo.jsx';
import CppLogo from '@logos/cpp/cpp-logo.jsx';
import QtLogo from '@logos/qt/qt-logo.jsx';
import KafkaLogo from '@logos/kafka/kafka-logo.jsx';
import PostgreSqlLogo from '@logos/postgresql/postgresql-logo.jsx';
import ReactLogo from '@logos/react/react-logo.jsx';
import JavaScriptLogo from '@logos/java-script/java-script-logo.jsx';
import HtmlLogo from '@logos/html/html-logo.jsx';
import CssLogo from '@logos/css/css-logo.jsx';
import DockerLogo from '@logos/docker/docker-logo.jsx';
import GitLogo from '@logos/git/git-logo.jsx';
import CmakeLogo from '@logos/cmake/cmake-logo.jsx';
import SpringFrameworkLogo from '@logos/spring-framework/spring-framework-logo.jsx';
import LinuxLogo from '@logos/linux/linux-logo.jsx';
import NginxLogo from "@logos/nginx/nginx-logo.jsx";

import { useLanguage } from "@i18n/use-language.js";

const technologyGroups = [
  {
    title: 'BACKEND',
    items: [
      { name: 'Java', Icon: JavaLogo },
      { name: 'Spring Framework', Icon: SpringFrameworkLogo },
      { name: 'PostgreSQL', Icon: PostgreSqlLogo },
      { name: 'Apache Kafka', Icon: KafkaLogo },
    ],
  },
  {
    title: 'FRONTEND',
    items: [
      { name: 'React', Icon: ReactLogo },
      { name: 'JavaScript', Icon: JavaScriptLogo },
      { name: 'HTML', Icon: HtmlLogo },
      { name: 'CSS', Icon: CssLogo },
    ],
  },
  {
    title: 'DEVOPS',
    items: [
      { name: 'Docker', Icon: DockerLogo },
      { name: 'Linux', Icon: LinuxLogo },
      { name: 'Nginx', Icon: NginxLogo },
      { name: 'Git', Icon: GitLogo },
    ],
  },
  {
    title: 'DESKTOP',
    items: [
      { name: 'C++', Icon: CppLogo },
      { name: 'Qt', Icon: QtLogo },
      { name: 'CMake', Icon: CmakeLogo },
    ],
  },
];

{/*
const technologies = [
  { name: 'Java', Icon: JavaLogo },
  { name: 'Spring Framework', Icon: SpringFrameworkLogo },
  { name: 'PostgreSQL', Icon: PostgreSqlLogo },
  { name: 'Apache Kafka', Icon: KafkaLogo },
  { name: 'React', Icon: ReactLogo },
  { name: 'JavaScript', Icon: JavaScriptLogo },
  { name: 'HTML', Icon: HtmlLogo },
  { name: 'CSS', Icon: CssLogo },
  { name: 'Docker', Icon: DockerLogo },
  { name: 'Linux', Icon: LinuxLogo },
  { name: 'Nginx', Icon: NginxLogo },
  { name: 'Git', Icon: GitLogo },
  { name: 'C++', Icon: CppLogo },
  { name: 'Qt', Icon: QtLogo },
  { name: 'CMake', Icon: CmakeLogo },
];
*/}

export default function Technologies() {
  const { t } = useLanguage();
  const technologiesTexts = t.homepage.about.technologies;

  return (
    <section className="technologies">
      <h3 className="technologies__title section-layout__title">{technologiesTexts.title}</h3>

      {/*
      <div className="technologies__content section-layout__split">
        <div className={"section-layout__split-right"}>
          <div className="technology-cards__container">
            {technologies.map(({ name, Icon }) => (
              <article className="technology-card" key={name}>
                <Icon className="technology-card__icon" />
                <h4 className="technology-card__label">{name}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
      */}

      <div className="technologies__content">
        <ol className="technologies__groups">
          {technologyGroups.map((group) => (
            <li className="technologies__group" key={group.title}>
              <div className="technologies__group-content">
                <h3 className="technologies__group-title">
                  {group.title}
                </h3>

                <ul className="technologies__list">
                  {group.items.map(({ name, Icon }) => (
                    <li className="technologies__item" key={name}>
                      <div className="technologies__icon-circle">
                        <Icon className="technologies__icon" />
                      </div>

                      <span className="technologies__item-label">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}