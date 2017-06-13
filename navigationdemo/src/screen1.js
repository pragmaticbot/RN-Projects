import React, { Component } from 'react';
import {
	Text,
	View,
	Platform
} from 'react-native';
import NavBar from 'react-native-navbar';

class Screen1 extends Component {

	rightButtonConfig = {
		title: 'Next',
		handler: () => this.props.navigation.navigate('Screen2'),
	};

	titleConfig = {
		title: 'Hello world',
	};

	render() {
		return (
			<View style={{flex: 1}}>

				<View style={styles.top} >
					<Text style={styles.text} >Screen 1</Text>
				</View>
			</View>		
		);
	}
};

const styles = {
	top: {
		backgroundColor: '#000',
		padding: 0,
	},
	text: {
		color: '#fff'
	}
}

export default Screen1;