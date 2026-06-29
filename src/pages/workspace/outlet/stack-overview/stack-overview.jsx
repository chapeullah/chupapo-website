import './stack-overview.css';

export default function StackOverview({ stack = [] }) {
  return (
    <aside className="stack-overview">
      <h2 className="stack-overview__title">
        Stack
      </h2>

      <nav className="stack-overview__nav">
        {stack.map((technology) => (
          <a
            href={`#${technology.id}`}
            key={technology.id}
            className="stack-overview__link"
          >
            {technology.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}