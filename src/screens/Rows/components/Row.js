import React from 'react';
import { View, Text, StyleSheet, Image,Dimensions } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import * as Progress from 'react-native-progress';

ScreenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft:30,
    color:'#fff',
    fontFamily: "Choplin-ExtraLight-DEMO",
  },

  photo: {
    height: 52,
    width: 52,
    borderRadius: 20,
    marginLeft:20,
    marginTop:4
  },
});

const Roww = (props) => (
  <Grid>
  <Col style={{backgroundColor:'#00000000'}}>

  <Row style={{alignSelf: 'center', justifyContent: 'center',height:60,backgroundColor:'#00000000',borderRadius:5, borderWidth: 0.7,
  borderColor: '#00000000',}}>
  <Col>
  {(function() {
    switch(props.leconID) {
      case '1':
      return       <Image source={require('./nombres.png')} style={styles.photo} />
      case '2':
      return       <Image source={require('./negation.png')} style={styles.photo} />
      case '3':
      return       <Image source={require('./articles.png')} style={styles.photo} />
      default:
      return null;
    }
  })()}

  </Col>
  <Col size={3} style={{alignSelf: 'center', justifyContent: 'center'}}>

  <Text style={styles.text}>
  {`${props.leconChap}`}
  </Text>
  </Col>
  <Col style={{alignSelf: 'center', justifyContent: 'center'}}>
  {(function() {
    switch(props.leconProg) {
      case '0.2':
      return           <Progress.Circle size={40} indeterminate={false} showsText={true} progress={0.2} animated={false} color={'#fff'}/>

      case '0.7':
      return           <Progress.Circle size={40} indeterminate={false} showsText={true} progress={0.7} animated={false} color={'#fff'}/>

      case '0.5':
      return           <Progress.Circle size={40} indeterminate={false} showsText={true} progress={0.5} animated={false} color={'#fff'}/>

      default:
      return null;
    }
  })()}

  </Col>

  </Row>
  <Row style={{alignSelf: 'center', justifyContent: 'center',marginTop:5,marginBottom:5,height:1,backgroundColor:'#fff',width:ScreenWidth-30}}>
    </Row>

  </Col>

  </Grid>
);

export default Roww;
