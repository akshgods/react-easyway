import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    AsyncStorage
} from "react-native";

class AuthLodingSreen extends Component {
    constructor(){
        super();
        this.checkLogin();
    }
    checkLogin=async()=>{
        const isLogin=await AsyncStorage.getItem('isLogin');
        this.props.navigation.navigate(isLogin? 'HomeNav' : 'Auth');
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator></ActivityIndicator>
            </View>
        );
    }
}
export default AuthLodingSreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});