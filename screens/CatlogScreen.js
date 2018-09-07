import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";
import BackButton from '../components/BackButton';
const BaseUrl='http://54.91.113.204/';

class CatlogScreen extends Component {
    constructor(props){
        super(props);
    this.state={
        productList:[],
        categorieList:[],
    }
    }
    componentDidMount(){
        this._apiProductList();
        this._apiCategorieList();
        // this._movies();
    }
    _movies=()=>{
        return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
       this.setState({
        productList:data.products
    })
    }
    _apiProductList=async()=>{
        let Url='api/product_list/';
       let data=await this._get(Url);
       console.log('_apiProductList: ',data);
       this.setState({
        productList:data.products
    })
    }
    _apiCategorieList=async()=>{
        let Url='api/categories/';
       let data=await this._get(Url);
       console.log('_apiCategorieList: ',data);
       this.setState({
           categorieList:data.categories
       })
    }
    _get= async (Url)=>{
        const mainUrl=BaseUrl+Url;
        console.log('url: ',mainUrl)
        try {
            let response = await fetch(
                mainUrl
            );
            let responseJson = await response.json();
            return responseJson;
          } catch (error) {
            console.error(error);
          }
    }
    render() {
        const cat=this.state.categorieList;
        const products=this.state.productList;
        return (
            <View style={styles.container}>
            <BackButton/>
                <Text>CatlogScreen</Text>
                <FlatList
          data={products}
          renderItem={({item}) => <Text>{item.product_title}, {item.product_image}</Text>}
          keyExtractor={(item, index) => index.toString() }
        />
            </View>
        );
    }
}
export default CatlogScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});