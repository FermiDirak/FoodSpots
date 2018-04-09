import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RestaurantItem from './RestaurantItem';

import { Card, CardTitle, CardActions, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class RestaurantsCard extends Component {
  static propTypes = {
    restaurants: PropTypes.array,
  };

  static defaultProps = {
    restaurants: [],
  };

  render() {
    return (
      <Card style={{width: '30%', maxWidth: '500px', minWidth: '300px'}}>
        <CardTitle title='Favorite Restaurants' style={{textAlign: 'center'}}/>

        <div>
          {
            this.props.restaurants.map((restaurant, i) => {
            return <div key={i}> <RestaurantItem restaurant={restaurant}/> </div>
            })
          }
        </div>

        <CardActions style={{display: 'flex', justifyContent: 'center'}}>
          <FlatButton label='add restaurant'/>
        </CardActions>
      </Card>
    );
  }
}

export default RestaurantsCard;