import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MaterialIcon from 'material-icons-react';
import { Card } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class AddPlaceButton extends PureComponent {
  static propTypes = {
    placeName: PropTypes.string,
    onClick: PropTypes.func,
  }

  render() {
    return (
      <Card zDepth={5} style={{display: 'inline-block'}}
        onClick={this.props.onClick}
      >
        <FlatButton style={{height: '52px'}}>
          <FlexBox>
            <MaterialIcon icon='add'/>
            {this.props.placeName}
          </FlexBox>
        </FlatButton>
      </Card>
    );
  }
}

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16pt;
  padding: 0 16px;
`;

export default AddPlaceButton;