import React from 'react';
import ReactDOM from 'react-dom/client';

import { Desktop, Icon } from '../src';

import "bootstrap/dist/css/bootstrap.css";
import '../src/css/fenestra.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));
const desktop = <Desktop
icons={[
  ({ fenestra }) =>
    <Icon title="Abrir Janela"
      icon={<FontAwesomeIcon icon={faWindowRestore} size="3x" />}
      onClick={() => fenestra.open({
        title: "Desktop",
        content: ({ fenestra }) => <h1>Olá Mundo</h1>
      })}
    />
]}
/>;

root.render(
  <React.StrictMode>
    <Desktop
      icons={[
        ({ fenestra }) =>
          <Icon title="Abrir Janela"
            icon={<FontAwesomeIcon icon={faWindowRestore} size="3x" />}
            onClick={() => fenestra.open({
              title: "Nova Janela",
              content: ({ fenestra }) => desktop
            })}
          />
      ]}
    />
  </React.StrictMode>
);