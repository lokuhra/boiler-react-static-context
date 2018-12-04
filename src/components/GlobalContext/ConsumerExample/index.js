import React, { Fragment } from 'react';

import { Consumer } from '../ContextProvider';

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

const Counter = () => (
  <Consumer>
    {({ state: { theme }, actions: { toggle } }) => (
      <Fragment>
        <button onClick={() => toggle()} text="Toggle" />
        <div style={styles[theme]}>{theme}</div>
      </Fragment>
    )}
  </Consumer>
);

export default Counter;
