import React, { Component } from 'react';
import { View, Image, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SplashScreen extends Component {

  static navigationOptions = {
    tabBarVisible: false
  }

  componentDidMount() {
    AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bg}
          source={{ uri: 'https://image.ibb.co/iur7Fk/bg.png' }}
        >
          <Button
            large
            icon={{ name: 'facebook', type: 'font-awesome' }}
            title={'Login with Facebook'}
            onPress={() => this.props.facebookLogin()}
            buttonStyle={styles.buttonStyle}
          />
        </Image>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  bg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 150
  },
  buttonStyle: {
    backgroundColor: '#355089'
  }
};

export default connect(null, actions)(SplashScreen);