import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    Image,
    Dimensions
} from "react-native";
import { Button,Icon } from "native-base";

const screenSize={
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

class HomeScreen extends Component {
    logoutMe=async()=>{
        await AsyncStorage.removeItem('isLogin');
        this.props.navigation.navigate('AuthLoding');
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={{flex:3,backgroundColor:'pink',}}>
                <View style={{height:(screenSize.height/3.5)}}>
                    <Image 
                    style={{width:(screenSize.width/1.3),height:(screenSize.height/3),
                            left:30,
                            top:-20,zIndex:1,position:'absolute'}}
                     resizeMode={'contain'}
                    source={require('../assets/imgs/BG_full_home.png')} />
                        <Image style={{width:200,height:150,position:'absolute',zIndex:2}}  source={require('../assets/imgs/Genba-Package001.png')} /> 
                        <Image  style={{width:200,height:100,position:'absolute',zIndex:3}} source={require('../assets/imgs/Plant_home.png')} />          
                    <Button style={{position:'absolute',top:25,right:30}} rounded onPress={()=>{this.props.navigation.navigate('Catlog');}}>
                        <Text>Only see catalog</Text>
                    </Button>
                </View>
                <View style={{height:(screenSize.height/4),zIndex:0,backgroundColor:'green'}}>
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