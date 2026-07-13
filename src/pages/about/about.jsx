import "./about.css";

import Profile from "./profile/profile.jsx";
import Technologies from "./technologies/technologies.jsx";
import WorkExperience from "./work-experience/work-experience.jsx";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-page__content">
        <Profile />
        <Technologies />
        <WorkExperience />
      </div>
    </div>
  );
}
