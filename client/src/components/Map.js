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
      longitude: 0,
      latitiude: 0,
    };
  }

  render() {
    return (
      <GoogleMap
        google={this.props.google}
        zoom={15}
        initialCenter={{ lng: -122.4089666, lat: 37.7836924 }}
        centerAroundCurrentLocation={true}>

        {/* <Marker position={{ lat: -34.397, lng: 150.644 }}/> */}

        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>hello</h1>
          </div>
        </InfoWindow>

      </GoogleMap>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys.google_maps_api_key,
})(Map);