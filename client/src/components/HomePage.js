import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Map from './Map';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  onButtonClick = () => {
    console.log('hi');
  }

  render() {
    return (
      <div>
        <Map/>


        <Float>
          Hello World

          <button style={{pointerEvents:'all'}} onClick={this.onButtonClick}>
            Swag
          </button>
        </Float>

      </div>
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

const Float = styled.div`
  position: relative;
  background: lightblue;
  pointer-events: none;
`;

export default HomePage;
