import React, { Component } from 'react';
import styled from 'styled-components';

import Map from './Map';
import RestaurantsCard from './RestaurantsCard';
import SearchCard from './SearchCard';
import AddPlaceButton from './AddPlaceButton';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlace: undefined,
      favoritePlaces: [],
    };
  }

  onButtonClick = () => {
    console.log('hi');
  }

  /* called when a place is clicked on the map */
  onPlaceClicked = (place) => {
    console.log('IM HOMEPAGE');
    console.log(place);

    this.setState({selectedPlace: place});
  }

  render() {
    return (
      <Container>
        <Map onPlaceClicked={this.onPlaceClicked}/>

        <Content>
          <Header>
          <Float>
            <RestaurantsCard/>
          </Float>

          <Float style={{margin: '24px'}}>
            <SearchCard/>
          </Float>
          </Header>

          <Bottom>
            <Float style={{margin: '128px 24px'}}>
              { this.state.selectedPlace
                ? <AddPlaceButton placeName={this.state.selectedPlace.name}/>
                : undefined
              }
            </Float>
          </Bottom>
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

const Bottom = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  bottom: 0;
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
