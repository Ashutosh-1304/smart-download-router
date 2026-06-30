import './options.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <section class="page-shell">
      <header class="page-header">
        <p class="eyebrow">Smart Download Router</p>
        <h1>Rules</h1>
      </header>
      <p class="empty-state">Rule management is being initialized.</p>
    </section>
  `;
}

