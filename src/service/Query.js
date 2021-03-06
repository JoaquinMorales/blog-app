import { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { config } from './constants';

export class Query extends Component {
  constructor(props) {
    super(props);
    this.state = { response: {}, loading: false };
  }

  componentDidMount() {
    this.callQuery();
  }

  componentDidUpdate(prevProps) {
    const { params } = this.props;
    const { params: oldParams } = prevProps;
    const same = Object.keys(oldParams)
      .reduce((oldValue, key) => oldValue && oldParams[key] === params[key], true);
    if (!same) {
      this.callQuery();
    }
  }

  callQuery() {
    const { params: { url, ...rest } } = this.props;
    this.setState({ loading: true });
    axios.request({ ...rest, url: `${config.urlBase}/${url}` })
      .then(response => this.setState({ response, loading: false }))
      .catch((error) => {
        if (error.response) {
          this.setState({ response: error.response, loading: false });
        } else {
          this.setState({ loading: false });
          console.error('Error', error.message);
        }
      });
  }

  render() {
    const { props: { children }, state: { response, loading } } = this;
    return children(response, { loading });
  }
}

Query.propTypes = {
  params: PropTypes.shape({
    method: PropTypes.string,
    url: PropTypes.string,
    params: PropTypes.string,
    data: PropTypes.string,
  }).isRequired,
  children: PropTypes.func.isRequired,
};

export default Query;
