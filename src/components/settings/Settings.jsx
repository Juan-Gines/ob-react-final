import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const defaultConfig = {
    theme: 'dark',
    lang: 'es',
};

const Settings = () => {
    const [config, setConfig] = useLocalStorage('config', defaultConfig);

    const handleClick = () => {
        setConfig((oldConfig) => (
            {
                ...oldConfig,
                theme: 'light',
            }
        ));
    };
    return (
      <div>
        <h1>APP SETTINGS</h1>
        <p>
          {' '}
          Actual Config:
          {' '}
          {config.theme}
        </p>
        <button type="button" onClick={handleClick}>
          Save New Settings
        </button>
      </div>
    );
};

export default Settings;