import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";

class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={()=>{this.props.navigation.goBack()}}>
                <Text>BackButton</Text>
            </TouchableOpacity>
        );
    }
}
export default withNavigation(BackButton);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});