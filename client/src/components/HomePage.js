import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Map from './Map';
import RestaurantsCard from './RestaurantsCard';
import SearchCard from './SearchCard';

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
          <Header>
          <Float>
            <RestaurantsCard/>
          </Float>

          <Float style={{margin: '24px'}}>
            <SearchCard/>
          </Float>
          </Header>
        </Content>
      </Container>
    );
  }
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = Container.extend`
  background: rgba(0, 0, 0, 0);
  position: relative;
  pointer-events: none;
`;

const Float = styled.div`
  pointer-events: all;
`;

export default HomePage;
