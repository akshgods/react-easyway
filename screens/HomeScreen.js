import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    Image,
    Dimensions,
    Button
} from "react-native";
import { Icon } from "native-base";

const screenSize={
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

class HomeScreen extends Component {
    logoutMe=async()=>{
        await AsyncStorage.removeItem('isLogin');
        this.props.navigation.navigate('AuthLoding');
    }
    catlogPage=()=>{
        this.props.navigation.navigate('Catlog');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:3,backgroundColor:'red',minHeight:300}}>                  
                    <TouchableOpacity style={{backgroundColor:'blue',padding:10
                ,borderRadius:20,alignSelf: 'baseline' ,justifyContent: "center",flexDirection:"row",alignItems: "center"}}
                onPress={this.catlogPage}
                activeOpacity={0.8}
                >
                        <Text style={{fontSize:14,color:'white'}} allowFontScaling
                        adjustsFontSizeToFit={true}
                        minimumFontScale={.5}
                        numberOfLines={1}
                        >Catlog Page hello world</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:2,backgroundColor:'green',flexDirection:'row',minHeight:150}}>
                    <View style={{flex:3,backgroundColor:'pink'}}>

                    </View>
                    <View style={{flex:2,backgroundColor:'blue'}}>
                        
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
      
    }
});