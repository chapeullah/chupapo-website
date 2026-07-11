import CoffeeIcon from '@icons/coffee/coffee-icon.jsx';
import SpringIcon from '@icons/spring/spring-icon.jsx';
import PostgreSqlIcon from '@icons/postgresql/postgresql-icon.jsx';
import KafkaIcon from '@icons/kafka/kafka-icon.jsx';
import ReactIcon from '@icons/react/react-icon.jsx';
import JavaScriptIcon from '@icons/javascript/javascript-icon.jsx';
import HtmlIcon from '@icons/html/html-icon.jsx';
import CssIcon from '@icons/css/css-icon.jsx';
import DockerIcon from '@icons/docker/docker-icon.jsx';
import LinuxIcon from '@icons/linux/linux-icon.jsx';
import NginxIcon from '@icons/nginx/nginx-icon.jsx';
import GitIcon from '@icons/git/git-icon.jsx';
import CppIcon from '@icons/cpp/cpp-icon.jsx';
import QtIcon from '@icons/qt/qt-icon.jsx';
import CmakeIcon from '@icons/cmake/cmake-icon.jsx';

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
      { name: "JavaScript", Icon: JavaScriptIcon, href: "https://tc39.es/ecma262/" },
      { name: "HTML", Icon: HtmlIcon, href: "https://developer.mozilla.org/docs/Web/HTML" },
      { name: "CSS", Icon: CssIcon, href: "https://www.w3.org/Style/CSS/" },
    ],
  },
  {
    id: "devops",
    items: [
      { name: "Docker", Icon: DockerIcon, href: "https://www.docker.com/" },
      { name: "Linux", Icon: LinuxIcon, href: "https://www.linux.org/" },
      { name: "Nginx", Icon: NginxIcon, href: "https://nginx.org/" },
      { name: "Git", Icon: GitIcon, href: "https://git-scm.com/" },
    ],
  },
  {
    id: "desktop",
    items: [
      { name: "C++", Icon: CppIcon, href: "https://isocpp.org/" },
      { name: "Qt", Icon: QtIcon, href: "https://www.qt.io/" },
      { name: "CMake", Icon: CmakeIcon, href: "https://cmake.org/" },
    ],
  },
];