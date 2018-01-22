import 'react-native';
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {} from 'jest'

import Landing from '../';

describe('Landing Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Landing />
    );
  });
})