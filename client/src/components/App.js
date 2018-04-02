import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import styled from 'styled-components';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
    }
  }

  logged = (props) => {

  }

  render() {
    return (
      <BrowserRouter>
        <Container>
          <AppBar title='FoodSpots'
            iconElementRight={
              this.state.loggedIn
              ? undefined
              : <FlatButton label='Sign Up'/>
            }
          />

          <Content>

            <Switch>
              <Route exact path='/' component={HomePage}/>
            </Switch>

          </Content>

        </Container>
      </BrowserRouter>
    );
  }
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 120px);
  overflow: hidden;
`;

export default App;
