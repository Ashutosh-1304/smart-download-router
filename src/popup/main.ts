import './popup.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <section class="popup-shell">
      <h1>Smart Download Router</h1>
      <p>Status: Enabled</p>
      <button id="open-options" type="button">Open Options</button>
    </section>
  `;

  document.querySelector<HTMLButtonElement>('#open-options')?.addEventListener('click', () => {
    void chrome.runtime.openOptionsPage();
  });
}

