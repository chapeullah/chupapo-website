import './features-page.css';

const features = [
  {
    title: 'Multitask with tabs',
    description: 'Avoid multiple windows and keep your desktop clutter-free with tabs.',
    viewBox: '0 0 20 20',
    path: 'M2.997 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5zm13 .5v-.5a1.5 1.5 0 0 0-1.5-1.5h-5.5v1.5a.5.5 0 0 0 .5.5zm-8-2h-2.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7h-6.5a1.5 1.5 0 0 1-1.5-1.5z',
  },
  {
    title: 'Dual pane',
    description: 'View and manage two folders side by side with the Dual Pane feature.',
    viewBox: '0 0 24 24',
    path: 'M22 7.25A3.25 3.25 0 0 0 18.75 4H5.25A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75zM14.5 5.5v13H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75zm1.5 0h2.75c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H16z',
  },
  {
    title: 'Tag files and folders',
    description: 'Organize and sort your files and folders with colored tags.',
    viewBox: '0 0 24 24',
    path: 'M19.75 2A2.25 2.25 0 0 1 22 4.25v5.462a3.25 3.25 0 0 1-.952 2.298l-8.5 8.503a3.255 3.255 0 0 1-4.597.001L3.489 16.06a3.25 3.25 0 0 1-.004-4.596l8.5-8.51a3.25 3.25 0 0 1 2.3-.953zm0 1.5h-5.466c-.464 0-.91.185-1.238.513l-8.512 8.523a1.75 1.75 0 0 0 .015 2.462l4.461 4.454a1.755 1.755 0 0 0 2.477 0l8.5-8.503a1.75 1.75 0 0 0 .513-1.237V4.25a.75.75 0 0 0-.75-.75M17 5.502a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3',
  },
  {
    title: 'Column view',
    description: 'Quickly navigate through different levels of the file system using the column layout.',
    viewBox: '0 0 28 28',
    path: 'M5.754 4a3.75 3.75 0 0 0-3.75 3.75v11.5A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H9v16H5.754a2.25 2.25 0 0 1-2.25-2.25zM10.5 21.5v-16h11.75a2.25 2.25 0 0 1 2.25 2.25v11.5a2.25 2.25 0 0 1-2.25 2.25z',
  },
  {
    title: 'View and edit archives',
    description: 'Create and extract archives including zip, WinRar, and 7zip.',
    viewBox: '0 0 24 24',
    path: 'M8.129 3a2.25 2.25 0 0 1 1.59.66l1.842 1.84h7.189A3.25 3.25 0 0 1 22 8.75v9a3.25 3.25 0 0 1-3 3.24v1.395l-.013.124a.62.62 0 0 1-.478.478l-.124.013h-4.77a.615.615 0 0 1-.602-.491L13 22.385V21H5.25A3.25 3.25 0 0 1 2 17.75V6.25A3.25 3.25 0 0 1 5.25 3zM16 16.5a1.5 1.5 0 0 0-1.5 1.5v3.5h3V18a1.5 1.5 0 0 0-1.5-1.5M9.72 8.84a2.25 2.25 0 0 1-1.591.66H3.5v8.25c0 .966.784 1.75 1.75 1.75H13V18c0-1.044.534-1.963 1.343-2.5h-.593a.75.75 0 0 1 0-1.5H16v1a3 3 0 0 1 3 3v1.48a1.75 1.75 0 0 0 1.5-1.73v-9A1.75 1.75 0 0 0 18.75 7h-7.19zm8.53 3.66a.75.75 0 0 1 0 1.5H16v-1.5zm-2.25 0h-2.25a.75.75 0 0 1 0-1.5H16zm2.25-3a.75.75 0 0 1 0 1.5H16V9.5zM16 9.5h-2.25a.75.75 0 0 1 0-1.5H16zm-10.75-5A1.75 1.75 0 0 0 3.5 6.25V8h4.629a.75.75 0 0 0 .53-.22l1.53-1.53l-1.53-1.53a.75.75 0 0 0-.53-.22z',
  },
  {
    title: 'Seamless cloud integration',
    description: 'Built-in support for cloud drives such as OneDrive, Google Drive, and iCloud.',
    viewBox: '0 0 24 24',
    path: 'M12 5.5a4.5 4.5 0 0 0-4.495 4.285a.75.75 0 0 1-.75.715H6.5a3 3 0 1 0 0 6h11a3 3 0 1 0 0-6h-.256a.75.75 0 0 1-.749-.715A4.5 4.5 0 0 0 12 5.5M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98',
  },
  {
    title: 'Preview pane',
    description: 'Preview photos, videos, and documents without opening them.',
    viewBox: '0 0 24 24',
    path: 'M22 7.25A3.25 3.25 0 0 0 18.75 4H5.25A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75zM14.5 5.5v13H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75zm1.5 0h2.75c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75H16z',
  },
  {
    title: 'QuickLook & SeerPro support',
    description: 'Preview Office files, documents, and other file types by pressing the space bar. This feature requires installing QuickLook or SeerPro.',
    viewBox: '0 0 20 20',
    path: 'M3.26 11.602C3.942 8.327 6.793 6 10 6s6.057 2.327 6.74 5.602a.5.5 0 0 0 .98-.204C16.943 7.673 13.693 5 10 5s-6.943 2.673-7.72 6.398a.5.5 0 0 0 .98.204M10 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-2.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0',
  },
  {
    title: 'Git integration',
    description: 'Easily manage your Git projects. Create new branches, switch between them, and sync your changes - all without leaving Files.',
    viewBox: '0 0 24 24',
    path: 'M4 5.5a3.5 3.5 0 1 1 4.489 3.358a5.5 5.5 0 0 0 5.261 3.892h.33a3.501 3.501 0 0 1 6.92.75a3.5 3.5 0 0 1-6.92.75h-.33a6.99 6.99 0 0 1-5.5-2.67v3.5A3.501 3.501 0 0 1 7.5 22a3.5 3.5 0 0 1-.75-6.92V8.92A3.5 3.5 0 0 1 4 5.5m3.5-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 13a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8-3a2 2 0 1 0 4 0a2 2 0 0 0-4 0',
  },
  {
    title: 'Hashes',
    description: 'View and compare file hashes from the properties window.',
    viewBox: '0 0 24 24',
    path: 'M10.987 2.89a.75.75 0 1 0-1.474-.28L8.494 7.999L3.75 8a.75.75 0 1 0 0 1.5l4.46-.002l-.946 5l-4.514.002a.75.75 0 0 0 0 1.5l4.23-.002l-.967 5.116a.75.75 0 1 0 1.474.278l1.02-5.395l5.474-.002l-.968 5.119a.75.75 0 1 0 1.474.278l1.021-5.398l4.742-.002a.75.75 0 1 0 0-1.5l-4.458.002l.946-5l4.512-.002a.75.75 0 1 0 0-1.5l-4.229.002l.966-5.104a.75.75 0 0 0-1.474-.28l-1.018 5.385l-5.474.002zm-1.25 6.608l5.474-.003l-.946 5l-5.474.002z',
  },
  {
    title: 'Command Palette',
    description: 'Quickly access commands, features, and settings from the Command Palette.',
    viewBox: '0 0 24 24',
    path: 'M9.714 1.962a3.25 3.25 0 0 1 4.596 0l7.75 7.75a3.25 3.25 0 0 1 0 4.596l-7.75 7.75a3.25 3.25 0 0 1-4.596 0l-7.75-7.75a3.25 3.25 0 0 1 0-4.596zm3.535 1.06a1.75 1.75 0 0 0-2.475 0l-7.75 7.75a1.75 1.75 0 0 0 0 2.475l7.75 7.75a1.75 1.75 0 0 0 2.475 0l7.75-7.75a1.75 1.75 0 0 0 0-2.474z',
  },
  {
    title: 'Remap key bindings',
    description: 'Streamline your workflow by creating custom key bindings.',
    viewBox: '0 0 24 24',
    path: 'M19.745 5a2.25 2.25 0 0 1 2.25 2.25v9.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 16.755V7.25A2.25 2.25 0 0 1 4.25 5zm0 1.5H4.25a.75.75 0 0 0-.75.75v9.505c0 .414.336.75.75.75h15.495a.75.75 0 0 0 .75-.75V7.25a.75.75 0 0 0-.75-.75m-12.995 8h10.5a.75.75 0 0 1 .102 1.493L17.25 16H6.75a.75.75 0 0 1-.102-1.493zh10.5zM16.5 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-5.995 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2M6 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2m2.995 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2',
  },
  {
    title: 'Toolbar Customization',
    description: 'Personalize the toolbar by adding or removing buttons from the list of available actions.',
    viewBox: '0 0 24 24',
    path: 'M11 7.5a5.5 5.5 0 0 1 7.664-5.058a.75.75 0 0 1 .235 1.22L16.311 6.25l1.44 1.44l2.587-2.59a.75.75 0 0 1 1.22.236a5.5 5.5 0 0 1-6.344 7.512L6.902 21.16A2.871 2.871 0 1 1 2.84 17.1l8.311-8.312A5.5 5.5 0 0 1 11 7.5m5.5-4a4 4 0 0 0-3.794 5.27a.75.75 0 0 1-.181.768L3.902 18.16A1.371 1.371 0 0 0 5.84 20.1l8.624-8.625a.75.75 0 0 1 .768-.18a4 4 0 0 0 5.246-4.213l-1.845 1.844a1.25 1.25 0 0 1-1.767 0l-1.793-1.793a1.25 1.25 0 0 1 0-1.768l1.844-1.844A4 4 0 0 0 16.5 3.5',
  },
];

function FeatureIcon({ viewBox, path }) {
  return (
    <svg
      className="feature-card__icon"
      viewBox={viewBox}
      width="1.2em"
      height="1.2em"
      aria-hidden="true"
    >
      <path fill="currentColor" d={path} />
    </svg>
  );
}

export default function FeaturesPage() {
  return (
    <main className="features-page">
      <section className="features-section">
        <div className="features-section__content">
          <span className="features-section__chip">Features</span>

          <h1 className="features-section__title">
            It already does that.
          </h1>

          <p className="features-section__description">
            Cloud files integration? Tabs and multiple layouts? Rich file previews?
            Files has it covered with robust features you expect from a modern file manager.
          </p>

          <hr className="features-section__divider" />

          <div className="feature-cards">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <FeatureIcon viewBox={feature.viewBox} path={feature.path} />

                <h2 className="feature-card__title">
                  {feature.title}
                </h2>

                <p className="feature-card__description">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}