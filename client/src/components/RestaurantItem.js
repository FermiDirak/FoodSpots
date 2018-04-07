import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RestaurantItem extends Component {
  static propTypes = {
    restaurant: PropTypes.object,
  };

  render() {
    return (
      <div>{this.props.restaurant.name}<br/></div>
    );
  }
}

export default RestaurantItem;