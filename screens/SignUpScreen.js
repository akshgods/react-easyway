import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import BackButton from "../components/BackButton";
class SignUpScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
            <BackButton />
                <Text>SignUpScreen</Text>
            </View>
        );
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});