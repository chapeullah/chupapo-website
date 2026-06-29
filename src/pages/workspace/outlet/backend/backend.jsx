import StackOverview from '@pages/workspace/outlet/stack-overview/stack-overview.jsx';
import { backendStack } from '@pages/workspace/outlet/backend/backend-stack.js';

export default function Backend() {
  return (
    <section className="backend">
      <h2 className="backend__title">Backend</h2>

      <StackOverview stack={backendStack} />

      <p className="backend__description">

      </p>
    </section>
  );
}