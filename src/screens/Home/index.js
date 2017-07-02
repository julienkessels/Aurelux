
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  ListView,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Col, Grid } from "react-native-easy-grid";
import { Container, Header, Title, Content, Button,Row } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';

var ScreenHeight;
export default class Home extends Component {
  constructor(props) {
    super(props);
    var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 0 : 23;
    ScreenHeight = Dimensions.get("window").height - STATUS_BAR_HEIGHT;
    ScreenWidth = Dimensions.get("window").width;


  }


  render() {

    return (
      <Container>
          <Grid>
            <Col style={{ height: ScreenHeight}}>
              <Image source={require('./background.png')} style={{ height: ScreenHeight, width:ScreenWidth}}>
                <Row size={5}>
                </Row>
                <Row size={10} style={{alignSelf: 'center',justifyContent: 'center',width:ScreenWidth}}>
                  <Col style={{alignSelf: 'center', justifyContent: 'center',width:ScreenWidth}}>
                    <Progress.Circle size={150} indeterminate={false} showsText={true} progress={0.2} animated={false} color={'#fff'} style={{alignSelf: 'center', justifyContent: 'center'}}/>
                  </Col>
                </Row>

                <Row size={2}>
                  <Col>
                    <Button outline light bordered onPress={Actions.Test} style={{alignSelf: 'center',width:300, justifyContent: 'center'}}>
                      <Text style={{color:"#fff",fontSize:20}}>Kuer</Text>
                    </Button>
                  </Col>
                </Row>

                <Row size={2}>
                  <Col>
                    <Button outline light bordered onPress={Actions.Rows} style={{alignSelf: 'center',width:300, justifyContent: 'center'}}>
                      <Text style={{color:"#fff",fontSize:20}}>Vocabel Test</Text>
                    </Button>
                  </Col>
                </Row>

                <Row size={2}>
                  <Col>
                    <Button outline light bordered onPress={Actions.Drag} style={{alignSelf: 'center',width:300, justifyContent: 'center'}}>
                      <Text style={{color:"#fff",fontSize:20}}>Drag</Text>
                    </Button>
                  </Col>
                </Row>

              </Image>
            </Col>
          </Grid>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
     flex: 1,
     marginTop: 20,
   },
   separator: {
     flex: 1,
     height: StyleSheet.hairlineWidth,
     backgroundColor: '#8E8E8E',
   },
});
