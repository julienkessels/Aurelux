
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Header, Title, Content, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

var ScreenHeight;
export default class Home extends Component {
  constructor(props) {
    super(props);
    var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 0 : 23;
    ScreenHeight = Dimensions.get("window").height - STATUS_BAR_HEIGHT;
  }
  render() {

    return (
      <Container>
        <Content >
          <Grid>
            <Col style={{ height: ScreenHeight}}>
              <LinearGradient colors={['#321EF6', '#4068FF']} style={{ height: ScreenHeight}}>
                <Row size={15}></Row>

                <Row size={2}>
                  <Col>
                    <Button outline light bordered onPress={Actions.Test} style={{alignSelf: 'center',width:300, justifyContent: 'center'}}>
                      <Text style={{color:"#fff",fontSize:20}}>Kuer</Text>
                    </Button>
                  </Col>
                </Row>

                <Row size={2}>
                  <Col>
                    <Button outline light bordered onPress={Actions.Test} style={{alignSelf: 'center',width:300, justifyContent: 'center'}}>
                      <Text style={{color:"#fff",fontSize:20}}>Vocabel Test</Text>
                    </Button>
                  </Col>
                </Row>

              </LinearGradient>
            </Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({

});
