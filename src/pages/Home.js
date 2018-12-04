import React, { Fragment } from 'react';
import { withSiteData } from 'react-static';
import Helmet from '../components/Helmet';
//
import logoImg from '../logo.png';
import { Consumer } from '../components/GlobalContext/ContextProvider';

const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
};

export default withSiteData(() => (
  <Consumer>
    {({ state: { theme }, actions: { toggle } }) => (
      <Fragment>
        <Helmet title="Home" />
        <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
        <img
          alt=""
          src={logoImg}
          style={{ display: 'block', margin: '0 auto' }}
        />
        <button onClick={() => toggle()} text="Toggle" />
        <div style={styles[theme]}>{theme}</div>
      </Fragment>
    )}
  </Consumer>
));
