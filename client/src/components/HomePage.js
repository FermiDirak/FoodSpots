import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Map from './Map';
import RestaurantsCard from './RestaurantsCard';

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
      <Container>
        <Map/>


        <Content>
          <Float>
            <RestaurantsCard/>
          </Float>
        </Content>

      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = Container.extend`
  position: relative;
  padding: 16px;
  pointer-events: none;
`;

const Float = styled.div`
  pointer-events: all;
`;

export default HomePage;
