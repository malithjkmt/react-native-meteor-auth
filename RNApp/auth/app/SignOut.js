import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Meteor from 'react-native-meteor';
import { LoginButton } from 'react-native-fbsdk';
import { onLogoutFinished } from './fb-login';

class SignOut extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Inside App</Text>
                <LoginButton
                    onLogoutFinished={onLogoutFinished} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default SignOut;