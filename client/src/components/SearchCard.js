import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardTitle, CardActions, CardText } from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';

class SearchCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
    }
  }

  handleUpdateInput = (input) => {
    this.setState({
      dataSource: [
        input,
        input + input,
        input + input + input,
      ],
    });
  }

  render() {
    return (
      <Card style={{width: '400px', padding: '4px 8px'}}>
        <AutoComplete
          hintText='search a restaurant'
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          fullWidth={true}
        />
      </Card>
    );
  }
}

export default SearchCard;