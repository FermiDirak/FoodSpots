import React, { Component } from 'react';
import styled from 'styled-components';



import Map from './Map';
import RestaurantsCard from './RestaurantsCard';
import SearchCard from './SearchCard';
import AddPlaceButton from './AddPlaceButton';

class HomePage extends Component {
  constructor(props) {
    super(props);

    let appLocalStorage = window.localStorage.getItem('state');
    appLocalStorage = JSON.parse(appLocalStorage);

    if (appLocalStorage !== null) {
      this.state = appLocalStorage;
    } else {
      this.state = {
        selectedPlace: undefined,
        favoritePlaces: [],
      };
    }

  }

  /* called when a place is clicked on the map */
  onPlaceClicked = (place) => {
    this.setState({selectedPlace: place});
  }

  /* called when add place is clicked */
  onAddPlaceClicked = () => {
    let { selectedPlace, favoritePlaces } = this.state;
    favoritePlaces.push(selectedPlace);
    selectedPlace = undefined;

    this.setState({
      selectedPlace,
      favoritePlaces,
    });

    window.localStorage.setItem('state', JSON.stringify(this.state));
  }

  render() {
    return (
      <Container>
        <Map onPlaceClicked={this.onPlaceClicked} restaurants={this.state.favoritePlaces}/>

        <Content>
          <Header>
            <Float>
              <RestaurantsCard restaurants={this.state.favoritePlaces}/>
            </Float>

            <Float style={{margin: '24px'}}>
              <SearchCard/>
            </Float>
          </Header>

          <Bottom>
            <Float style={{margin: '128px 24px'}}>
              {
                this.state.selectedPlace
                ? <AddPlaceButton placeName={this.state.selectedPlace.name}
                    onClick={this.onAddPlaceClicked}
                  />
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
