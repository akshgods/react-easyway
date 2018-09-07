import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from "react-native";
import BackButton from "../components/BackButton"; 

class SignInScreen extends Component {
    loginMe=async()=>{
        await AsyncStorage.setItem('isLogin','true');
        this.props.navigation.navigate('AuthLoding');
    }
    render() {
        return (
            <View style={styles.container}>
            <BackButton />
                <Text>SignInScreen</Text>
            <TouchableOpacity onPress={this.loginMe}>
                <Text>Login</Text>
            </TouchableOpacity>
            </View>
        );
    }
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});