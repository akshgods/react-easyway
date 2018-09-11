import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    Image
} from "react-native";
import { Button,Icon } from "native-base";


class HomeScreen extends Component {
    logoutMe=async()=>{
        await AsyncStorage.removeItem('isLogin');
        this.props.navigation.navigate('AuthLoding');
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={{flex:3,backgroundColor:'pink'}}>
                <View style={{position:'relative'}}>
                <View style={{flex:1}}>
                    <View style={{}}>
                        <Image style={{width:240,height:200,
                            position:'absolute',
                            left:30,
                            top:-20,}} source={require('../assets/imgs/BG_full_home.png')} />
                        <Image style={{width:200,height:150,position:'absolute'}}  source={require('../assets/imgs/Genba-Package001.png')} /> 
                        <Image  style={{width:200,height:100,position:'absolute'}} source={require('../assets/imgs/Plant_home.png')} />          
                    </View>
                    <Button style={{position:'absolute',top:25,right:30}} rounded onPress={()=>{this.props.navigation.navigate('Catlog');}}>
                        <Text>Only see catalog</Text>
                    </Button>
                </View>
                <View View style={{flex:1}}>
                    <Button iconLeft transparent primary>
                        <Icon name='arrow-forward' />
                    </Button>
                    <Text>Realize an order for me
                        <Text>
                            ask for today or schedule your order
                        </Text>
                    </Text>
                </View>
                </View>
            </View>
            
            <View style={{flex:2,backgroundColor:'green',flexDirection:'row'}}>
                <View style={{flex:1,backgroundColor:'blue'}}>
                    <Text>Send as a gift</Text>
                </View>
                <View style={{flex:1,backgroundColor:'red'}}>
                    <Text>Mi cuenta</Text>
                    <TouchableOpacity onPress={this.logoutMe}>
                <Text>Logout</Text>
            </TouchableOpacity>
                </View>
            </View>
    
        </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});