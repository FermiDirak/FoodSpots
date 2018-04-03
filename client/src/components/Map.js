import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import keys from './../keys';

import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MapContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const LoadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
`;

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?
    key=${keys.google_maps_api_key}
    &v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div> <LoadingContainer/> </div>,
    containerElement: <div style={{position: 'fixed', width: '100%', height: 'calc(100% - 64px)',}}/>,
    mapElement: <div style={{width: '100%', height: '100%'}}/>,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 37.783692, lng: -122.408967 }}
    >
      <Marker position={{ lat: 37.783692, lng: -122.408967 }} />
    </GoogleMap>
  ),
);

export default Map;