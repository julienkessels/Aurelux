
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
import { Container, Header,Title, Button, Icon,Left, Right,Body,ListItem,CheckBox ,Grid,Col } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

import Roww from './components/Row'
import demoData from './data2'


var ScreenHeight;
export default class Rows extends Component {
  constructor(props) {
    super(props);
    var STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 0 : 23;
    ScreenHeight = Dimensions.get("window").height - STATUS_BAR_HEIGHT;
    ScreenWidth = Dimensions.get("window").width;

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(demoData),
    };

  }






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
                    <Title style={{fontFamily: "FuturaPTW01-Medium", fontSize:25}}>Leçons</Title>
                </Body>
                <Right></Right>
            </Header>

            <Image source={require('./background.png')} style={{ height: ScreenHeight, width:ScreenWidth}}>

            <View style={styles.container}>
              <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <Roww {...data} />}
              />
            </View>
          </Image>
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
