import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/GlobalStyle';

import Aside from './components/Aside';

import Dashboard from './Pages/Dashboard';
import RealizarVenda from './Pages/RealizarVenda';

import Layout from './components/Layout';

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Layout>
          <Aside />
            <Route path="/" exact component={Dashboard} />
            <Route path="/RealizarVenda" exact component={RealizarVenda} />
        </Layout>
      </HashRouter>
    </>
  )
}

render(<App />, mainElement)
