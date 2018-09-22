import React, { Component } from 'react';
import { Image,Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left,
   Body, Right, View, Row, } from 'native-base';

   const screenSize={
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width
}

export default class CardComponent extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
<View style={{paddingHorizontal:15}}>
        <Card style={{borderRadius:20}}>
            <CardItem style={{flexDirection:'row',borderRadius:20,backgroundColor:'green'}} cardBody>
              <Image source={{uri: this.props.imgUri}}
              resizeMode={'stretch'} 
              style={{height:200, 
                width: null, 
                flex: 1,
                borderTopLeftRadius:20,
                borderBottomLeftRadius:20,
              }}/>
              <Right style={{flex:1,alignItems:'center',justifyContent:'center',paddingHorizontal:5}}>
                 <Text>
                        {this.props.cardTitle}
                </Text>
                <View style={{flexDirection:'row',width:screenSize.width*42/100,alignSelf:'center',marginTop:5}}>
                    <Text style={{textAlign:'center'}}>Q{this.props.cardPrice}
                      <Text>/</Text>
                      <Text style={{}} >{this.props.cardPriceText}</Text>
                    </Text>

                <View style={{alignSelf:'center',flexDirection:'row'}}>
                    <Text>Q{this.props.cardPrice}</Text>
                    <Text>/</Text>
                    <Text>{this.props.cardPriceText}</Text>
                </View>
                <Button transparent onPress={()=>{alert('ok')}}>
                  {/* <Icon active name="thumbs-up" /> */}
                  <Text>{this.props.cardButton}</Text>
                </Button>
                </View>
              </Right>
            </CardItem>
          </Card>
          </View>
    );
  }
}