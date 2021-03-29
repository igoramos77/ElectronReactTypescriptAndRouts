import React from 'react';

import { Container, LinkAction } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <nav className="menu">
        <div className="smartphone-menu-trigger"></div>
        <header className="avatar">
          <img src="https://avatars.githubusercontent.com/u/60680294?v=4" />
          <h2>Igor B.</h2>
        </header>
        <ul>
          <li className="icon-dashboard">
            <LinkAction to="/">Dashboard</LinkAction>
          </li>
          <li className="icon-customers">
            <LinkAction to="/RealizarVenda">Realizar Venda</LinkAction>
          </li>
          <li className="icon-customers"><span>Customers</span></li>
          <li className="icon-settings"><span>Settings</span></li>          
        </ul>
      </nav>
    </Container>
  );
}

export default Aside;