import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import FBSDK, { LoginButton } from 'react-native-fbsdk';
import { onLoginFinished } from './fb-login';

class SignIn extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Login View</Text>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLoginFinished={onLoginFinished}/>
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

export default SignIn;