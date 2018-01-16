import 'react-native';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {} from 'jest'

import App from '../App';

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
  );
});
