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
            Frontend technologies I use.
          </p>
        </header>

        <article className="workspace__article">
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