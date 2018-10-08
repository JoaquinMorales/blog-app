import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App tests', () => {
  it('should render App', () => {
    const app = shallow(<App />);
    expect(app.find('TopMenu')).toHaveLength(1);
    expect(app.find('Main')).toHaveLength(1);
  });
});
