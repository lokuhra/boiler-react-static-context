import React from 'react';

import Provider from './ContextProvider';
import Consumer from './ConsumerExample';

export default () => (
  <Provider>
    <Consumer />
  </Provider>
);
