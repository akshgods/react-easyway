import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>WelcomeScreen</Text>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignIn')}}>
                    <Text>SingIn</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignUp')}}>
                    <Text>SignUp</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});