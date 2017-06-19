
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Button, Icon,Left, Right,Body,ListItem,CheckBox } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Test extends Component {


  render() {
    return (
      <Container>
      <Header>
                <Left>
                    <Button transparent onPress={Actions.Home}>
                      <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Text>Cancel</Text>
                </Right>
            </Header>

        <Grid>
          <Row size={50}>
            <Col>
              <Button info onPress={Actions.Home}>
                <Text>Click Me! </Text>
              </Button>
            </Col>
          </Row>
          <Row size={50}>
            <Col>
              <Button info onPress={Actions.Home}>
                <Text>Click Me! </Text>
              </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
});
