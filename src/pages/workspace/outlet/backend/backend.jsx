import StackOverview from '@pages/workspace/outlet/stack-overview/stack-overview.jsx';
import { backendStack } from '@pages/workspace/outlet/backend/backend-stack.js';
import HeadingLink from '@ui/heading-link/heading-link.jsx';

export default function Backend() {
  const stack = backendStack;

  return (
    <div className="backend">
      <div>
        <p className="workspace__breadcrumbs">
          Tech stack / Backend
        </p>
      </div>
      <div className="workspace__content-grid">
        <header className="workspace__article-header">

          <h1 className="workspace__title">
            Backend
          </h1>

          <p className="workspace__lead">
            Backend technologies I use.
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