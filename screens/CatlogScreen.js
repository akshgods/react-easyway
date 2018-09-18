import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Dimensions
} from "react-native";
import BackButton from '../components/BackButton';
import CardComponent from '../components/CardComponent';

const BaseUrl='http://54.91.113.204/';

const screenSize={
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width
}
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
                {/* <FlatList
          data={products}
          renderItem={({item}) => <Text>{item.product_title}, {item.product_image}</Text>}
          keyExtractor={(item, index) => index.toString() }
        /> */}
     
     <CardComponent
     imgUri={'https://cdn.pixabay.com/photo/2015/02/28/17/28/tomato-mozzarella-653838_960_720.jpg'}
     cardTitle={'Welcome card Title Welcome card Title Welcome card Title Welcome card Title Welcome card Title'}
     cardPrice={'40'}
     cardPriceText={'4 unidades Welcome to card title'}
     cardButton={'Select'}
     />
     {/* <View style={{flex:1}}>

        <View style={{
             flex: 1,
             flexDirection:'row',
             borderBottomWidth:2,
             borderRadius:10,
             backgroundColor:'#fff',
             margin:20    
        }}>
            <View style={{flex:1,alignItems: 'stretch'}}>
                <Image  style={styles.cardImage} resizeMode="contain"
                 source={{uri:'https://cdn.pixabay.com/photo/2015/02/28/17/28/tomato-mozzarella-653838_960_720.jpg'}}
                  />
            </View>
            <View style={{}}>
                <Text style={styles.cardTitle}>
                    Welcome to card title
                </Text>
            <View>
                <Text style={styles.cardPrice}>
                    Q40.00 <Text style={styles.forwordSlash}>/</Text> 4 unidades
                </Text>
            </View>
            </View>
        </View>


    </View> */}
            </View>
        );
    }
}
export default CatlogScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    card:{
       
    },
    cardImageWrapper:{
   
    },
    cardTextWrapper:{

    },
    cardImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    cardTitle:{

    },
    cardPrice:{

    },
    forwordSlash:{

    }
});