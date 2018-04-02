import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Map from './Map';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <Map/>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex: 1;
  background: red;
  width: 100%;
  height: 100%;
`;

export default HomePage;
