import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import Query from './Query';

describe('Query wrapper', () => {
  it('should call axios query when component is invoked', () => {
    axios.request = jest.fn(() => Promise.resolve({}));
    shallow(<Query params={{}}>{() => <div />}</Query>);
    return expect(axios.request).toHaveBeenCalledTimes(1);
  });

  it('should call axios query when params are updated', () => {
    axios.request = jest.fn(() => Promise.resolve({}));
    const queryChild = shallow(<Query params={{ url: 'test' }}>{() => <div />}</Query>);
    queryChild.setProps({ params: { url: 'changed', method: 'post' } });
    return expect(axios.request).toHaveBeenCalledTimes(2);
  });

  it('should not call axios query when params are the same', () => {
    axios.request = jest.fn(() => Promise.resolve({}));
    const queryChild = shallow(<Query params={{ url: 'changed', method: 'post' }}>{() => <div />}</Query>);
    queryChild.setProps({ params: { url: 'changed', method: 'post' } });
    return expect(axios.request).toHaveBeenCalledTimes(1);
  });

  it('should set error in state when server respond with status code', () => {
    axios.request = jest.fn(() => Promise.reject({ response: { message: 'fail' } }));
    const queryChild = shallow(<Query params={{}}>{() => <div />}</Query>);
    return axios.request()
      .then(() => {})
      .catch(() => {
        queryChild.update();
        expect(queryChild.state('loading')).toEqual(false);
        expect(queryChild.state('response')).toEqual({ message: 'fail' });
      });
  });

  it('should not set in state the error when is not related to query', () => {
    axios.request = jest.fn(() => Promise.reject(new Error('error')));
    const queryChild = shallow(<Query params={{}}>{() => <div />}</Query>);
    return axios.request()
      .then(() => {})
      .catch(() => {
        queryChild.update();
        expect(queryChild.state('loading')).toEqual(false);
        expect(queryChild.state('response')).toEqual({});
      });
  });
});
