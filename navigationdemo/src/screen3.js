import React, { Component } from 'react';
import {
   Text,
   View
} from 'react-native';

class Screen3 extends Component {
	render() {
		return (
         <View style={styles.top} >
            <Text style={styles.text} >Screen 3</Text>
         </View>
		);
	}
};

const styles = {
	top: {
		backgroundColor: '#000',
		padding: 0,
		marginTop: 24,
	},
	text: {
		color: '#fff'
	}
}

export default Screen3;