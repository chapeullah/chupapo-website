import './frontend.css';

import StackOverview from '@pages/workspace/outlet/stack-overview/stack-overview.jsx';
import { frontendStack } from '@pages/workspace/outlet/frontend/frontend-stack.js';
import HeadingLink from '@ui/heading-link/heading-link.jsx';

export default function Frontend() {
  return (
    <div className="frontend">
      <div>
        <p className="workspace__breadcrumbs">
          Tech stack / Frontend
        </p>
      </div>
      <div className="workspace__content-grid">
        <header className="workspace__article-header">

          <h1 className="workspace__title">
            Frontend
          </h1>

          <p className="workspace__lead">
            Get started with GitHub Codespaces quickly.
          </p>
        </header>

        <article className="workspace__article">
          <section className="workspace__section" id="technologies">
            <h2>Technologies</h2>

            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Vite</li>
            </ul>
          </section>

          <section className="workspace__section" id="usage">
            <h2>Usage</h2>
            <p>
              I use frontend technologies to create responsive pages, reusable UI
              components, navigation, forms and client-side logic for web
              applications.
            </p>
          </section>

          {frontendStack.map((technology) => (
            <>
              <HeadingLink
                href={`#${technology.id}`}
                title={technology.name}
                id={technology.id}
                className='workspace__heading-link'
              />
            </>
          ))}

        </article>

        <StackOverview stack={frontendStack}></StackOverview>
      </div>
    </div>
  );
}