import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import keys from './../keys';

import {
  GoogleApiWrapper,
  Map as GoogleMap,
  InfoWindow,
  Marker
} from 'google-maps-react';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      selectedPlace: {},
      activeMarker: {},
    };
  }

  onMapClick = (place) => {
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
    console.log(this.state.showingInfoWindow);

    return (
      <MapContainer>
        <GoogleMap
          google={this.props.google}
          style={{width: '100%', height: '100%'}}
          zoom={15}
          initialCenter={{ lng: -122.4089666, lat: 37.7836924 }}
          centerAroundCurrentLocation={true}
          onClick={this.onMapClick}
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

export default GoogleApiWrapper({
  apiKey: keys.google_maps_api_key,
})(Map);