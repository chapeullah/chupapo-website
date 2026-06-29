import './desktop.css';

import HeadingLink from '@ui/heading-link/heading-link.jsx';
import StackOverview from '@pages/workspace/outlet/stack-overview/stack-overview.jsx';

import { desktopStack } from './desktop-stack.js';

export default function Desktop() {
  const stack = desktopStack;

  return (
    <div className="desktop">
      <div>
        <p className="workspace__breadcrumbs">
          Tech stack / Desktop
        </p>
      </div>
      <div className="workspace__content-grid">
        <header className="workspace__article-header">

          <h1 className="workspace__title">
            Desktop
          </h1>

          <p className="workspace__lead">
            Desktop technologies I use.
          </p>
        </header>

        <article className="workspace__article">
          {stack.map((technology) => (
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

        <StackOverview stack={stack}></StackOverview>
      </div>
    </div>
  );
}