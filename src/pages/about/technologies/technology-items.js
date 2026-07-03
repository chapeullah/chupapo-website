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

export const technologyItems = [
  {
    title: 'Backend',
    items: [
      { name: 'Java', Icon: JavaLogo, href: 'https://www.java.com/'},
      { name: 'Spring Framework', Icon: SpringFrameworkLogo, href: 'https://spring.io/' },
      { name: 'PostgreSQL', Icon: PostgreSqlLogo, href: 'https://www.postgresql.org/' },
      { name: 'Apache Kafka', Icon: KafkaLogo, href: 'https://kafka.apache.org/' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', Icon: ReactLogo, href: 'https://react.dev/' },
      { name: 'JavaScript', Icon: JavaScriptLogo, href: 'https://tc39.es/ecma262/' },
      { name: 'HTML', Icon: HtmlLogo, href: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS', Icon: CssLogo, href: 'https://www.w3.org/Style/CSS/' },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', Icon: DockerLogo, href: 'https://www.docker.com/' },
      { name: 'Linux', Icon: LinuxLogo, href: 'https://www.linux.org/' },
      { name: 'Nginx', Icon: NginxLogo, href: 'https://nginx.org/' },
      { name: 'Git', Icon: GitLogo, href: 'https://git-scm.com/' },
    ],
  },
  {
    title: 'Desktop',
    items: [
      { name: 'C++', Icon: CppLogo, href: 'https://isocpp.org/' },
      { name: 'Qt', Icon: QtLogo, href: 'https://www.qt.io/' },
      { name: 'CMake', Icon: CmakeLogo, href: 'https://cmake.org/' },
    ],
  },
];