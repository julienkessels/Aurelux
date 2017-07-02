
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Easing,
  Image,
  Dimensions,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Animated,
  PanResponder

} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Title, Button, Icon,Left, Right,Body,ListItem,CheckBox } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import LinearGradient from 'react-native-linear-gradient';

var ScreenHeight;

export default class Test extends Component {

  constructor(props) {
    super(props);

    this.animatedValue = new Animated.ValueXY();
    this._value = {x: 0, y: 0};
    this.animatedValue.addListener((value) => this._value = value);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (e, gestureState) => {
        this.animatedValue.setOffset({
          x: this._value.x,
          y: this._value.y,
        });
        this.animatedValue.setValue({ x: 0, y: 0})
      },

      onPanResponderMove: Animated.event([
        null, { dx: this.animatedValue.x, dy: this.animatedValue.y}
      ]),

      onPanResponderRelease: (e, gestureState) => {
        this.animatedValue.flattenOffset();
        Animated.decay(this.animatedValue, {
          deceleration: 0.997,
          velocity: { x: gestureState.vx, y: gestureState.vy }
        }).start();
      },
    })


    var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 64 : 54;
    ScreenHeight = Dimensions.get("window").height - STATUS_BAR_HEIGHT;
    this.state = {
         answer1: 'Bus',
         answer2: 'Auto',
         answer3: 'Zuch'

      }

  }



  render() {
    const animatedStyle = {
      transform: this.animatedValue.getTranslateTransform()
    };
    return (
      <Container>
      <Header>
                <Left>
                    <Button transparent onPress={Actions.Home}>
                      <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Vokabel Test</Title>
                </Body>
                <Right></Right>
            </Header>

            <Grid>
              <Col style={{ height: ScreenHeight}}>
                <LinearGradient colors={['#321EF6', '#6a87f7']} style={{ height: ScreenHeight}}>

                    <Col>
                    <Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
            <Text style={styles.text}>Drag Me</Text>
          </Animated.View>

                    <Image  style={{alignSelf: 'center', justifyContent: 'center',width: 200 , height: 200,marginTop:50}} source={require('./icon_bus.png')}/>
                    <Button outline light bordered onPress={() => onAnswer(1)} style={{alignSelf: 'center',width:300, justifyContent: 'center',marginTop:30}}>
                      <Text style={{color:"#fff",fontSize:20}}>{this.state.answer1}</Text>
                    </Button>
                    <Button outline light bordered onPress={() => onAnswer(2)} style={{alignSelf: 'center',width:300, justifyContent: 'center',marginTop:10}}>
                      <Text style={{color:"#fff",fontSize:20}}>{this.state.answer2}</Text>
                    </Button>
                    <Button outline light bordered onPress={() => onAnswer(3)} style={{alignSelf: 'center',width:300, justifyContent: 'center',marginTop:10}}>
                      <Text style={{color:"#fff",fontSize:20}}>{this.state.answer3}</Text>
                    </Button>

                    </Col>

                </LinearGradient>
              </Col>
            </Grid>

      </Container>
    );
  }
}

function onAnswer(number) {
  var answer = (number === 1) ? "Nice" : "Try again"
  Alert.alert(
            '',
            answer,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )
};
const styles = StyleSheet.create({

});
