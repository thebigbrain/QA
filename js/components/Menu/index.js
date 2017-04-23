import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';
import Svg, {
    Glyph
} from 'react-native-svg';

function showMenu (args) {
  // console.log(arguments);
  Alert.alert('arguments', 'hello navigationOptions');
}

const styles = StyleSheet.create({
  headerTools: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerRight: {
    fontSize: 24,
    padding: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  icon: {
    width: 15,
    height: 15
  }
});

export default class Home extends Component {
  render () {
    return (
      <View style={styles.headerTools}>
        <Svg><Glyph glyph-name="search" unicode="&#xf002;" horiz-adv-x="1664" 
d="M1152 704q0 185 -131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5t316.5 131.5t131.5 316.5zM1664 -128q0 -52 -38 -90t-90 -38q-54 0 -90 38l-343 342q-179 -124 -399 -124q-143 0 -273.5 55.5t-225 150t-150 225t-55.5 273.5
t55.5 273.5t150 225t225 150t273.5 55.5t273.5 -55.5t225 -150t150 -225t55.5 -273.5q0 -220 -124 -399l343 -343q37 -37 37 -90z" /></Svg>
        <Text style={styles.headerRight} onPress={showMenu}>+</Text>
      </View>
    )
  }
}
