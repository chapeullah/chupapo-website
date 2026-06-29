import HeadingLink from '@ui/heading-link/heading-link.jsx';
import StackOverview from '@pages/workspace/outlet/stack-overview/stack-overview.jsx';

import { devopsStack } from './devops-stack.js';

export default function DevOps() {
  const stack = devopsStack;

  return (
    <div className="devops">
      <div>
        <p className="workspace__breadcrumbs">
          Tech stack / DevOps
        </p>
      </div>
      <div className="workspace__content-grid">
        <header className="workspace__article-header">

          <h1 className="workspace__title">
            DevOps
          </h1>

          <p className="workspace__lead">
            DevOps technologies I use.
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