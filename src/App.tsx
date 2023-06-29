import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styles from './app.module.less';
import classNames from 'classnames';

function App() {
  return (
    <div className={styles.container}>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className={styles.logo} alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img
          src={reactLogo}
          className={classNames([styles.logo, styles.react])}
          alt="React logo"
        />
      </a>
      <h1>Vite + React</h1>
    </div>
  );
}

export default App;
