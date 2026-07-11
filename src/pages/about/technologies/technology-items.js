import CppLogo from '@logos/cpp/cpp-logo.jsx';
import QtLogo from '@logos/qt/qt-logo.jsx';
import JavaScriptLogo from '@logos/java-script/java-script-logo.jsx';
import HtmlLogo from '@logos/html/html-logo.jsx';
import CssLogo from '@logos/css/css-logo.jsx';
import DockerLogo from '@logos/docker/docker-logo.jsx';
import GitLogo from '@logos/git/git-logo.jsx';
import CmakeLogo from '@logos/cmake/cmake-logo.jsx';
import LinuxLogo from '@logos/linux/linux-logo.jsx';
import NginxLogo from '@logos/nginx/nginx-logo.jsx';
import CoffeeIcon from '@icons/coffee/coffee-icon.jsx';
import SpringIcon from '@icons/spring/spring-icon.jsx';
import PostgreSqlIcon from '@icons/postgresql/postgresql-icon.jsx';
import KafkaIcon from '@icons/kafka/kafka-icon.jsx';
import ReactIcon from '@icons/react/react-icon.jsx';

export const technologyItems = [
  {
    id: "backend",
    items: [
      { name: "Java", Icon: CoffeeIcon, href: "https://www.java.com/" },
      { name: "Spring Framework", Icon: SpringIcon, href: "https://spring.io/" },
      { name: "PostgreSQL", Icon: PostgreSqlIcon, href: "https://www.postgresql.org/" },
      { name: "Apache Kafka", Icon: KafkaIcon, href: "https://kafka.apache.org/" },
    ],
  },
  {
    id: "frontend",
    items: [
      { name: "React", Icon: ReactIcon, href: "https://react.dev/" },
      { name: "JavaScript", Icon: JavaScriptLogo, href: "https://tc39.es/ecma262/" },
      { name: "HTML", Icon: HtmlLogo, href: "https://developer.mozilla.org/docs/Web/HTML" },
      { name: "CSS", Icon: CssLogo, href: "https://www.w3.org/Style/CSS/" },
    ],
  },
  {
    id: "devops",
    items: [
      { name: "Docker", Icon: DockerLogo, href: "https://www.docker.com/" },
      { name: "Linux", Icon: LinuxLogo, href: "https://www.linux.org/" },
      { name: "Nginx", Icon: NginxLogo, href: "https://nginx.org/" },
      { name: "Git", Icon: GitLogo, href: "https://git-scm.com/" },
    ],
  },
  {
    id: "desktop",
    items: [
      { name: "C++", Icon: CppLogo, href: "https://isocpp.org/" },
      { name: "Qt", Icon: QtLogo, href: "https://www.qt.io/" },
      { name: "CMake", Icon: CmakeLogo, href: "https://cmake.org/" },
    ],
  },
];