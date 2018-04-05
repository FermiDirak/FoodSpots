import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import keys from './../publickeys';

import GoogleMap, {
  GoogleApiWrapper,
  InfoWindow,
  Marker,
} from 'google-maps-react';

class Map extends Component {
  static propType = {
    onPlaceClicked: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      selectedPlace: {},
      activeMarker: {},
    };

    console.log(props);
  }

  onMapClick = (props, map, place) => {
    let placeId = place.placeId;

    if (!placeId) {
      return;
    }

    const placeService = new props.google.maps.places.PlacesService(map);

    placeService.getDetails({placeId}, (place, status) => {
      if (status === props.google.maps.places.PlacesServiceStatus.OK) {
        this.props.onPlaceClicked(place);
      }
    });

    // placeService.nearbySearch({
    //   location: {lat: 53.2734, lng: -122.4091074},
    //   radius: '5000',
    //   type: ['food']
    // }, (results, status, pagination) => {
    //   console.log(results);

    //   console.log('hi');
    // });

    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  onMarkerClick = (place, marker, e) => {
    if (!this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: true,
        selectedPlace: place,
        activeMarker: marker,
      })
    }
  }

  render() {
    return (
      <MapContainer>
        <GoogleMap
          google={this.props.google}
          style={{width: '100%', height: '100%'}}
          className='map'
          zoom={15}
          centerAroundCurrentLocation={true}
          onClick={this.onMapClick}
          clickableIcons={true}
          disableDefaultUI={true}
        >

          <Marker onClick={this.onMarkerClick}
            name={'Current location'} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>hello {this.state.selectedPlace.name} </h1>
            </div>
          </InfoWindow>

        </GoogleMap>
      </MapContainer>
    );
  }
}

const MapContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const loadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
`;

export default GoogleApiWrapper({
  apiKey: keys.google_maps_api_key,
  libraries: ['places', 'visualization'],
  LoadingContainer: loadingContainer,
})(Map);