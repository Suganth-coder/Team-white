import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions, ImageBackground, } from 'react-native';
import { Header, Icon, Button, Chip, Card, ListItem, ViewPagerAndroid, PricingCard } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {  
  createSwitchNavigator,  
  createAppContainer,  
  createDrawerNavigator,  
  createStackNavigator  
} from 'react-navigation';  



export default function App() {

  console.log("App Executed!");
  const [index, setIndex] = React.useState(0);
  return (
    <SafeAreaProvider style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <Header
      barStyle="default"
      centerComponent={{
        text: "  SMART PARKING",
        style: { color: "#fff" }, 
      }}
      centerContainerStyle={{}}
      containerStyle={{ width: Dimensions.get('window').width - 2 }}
      leftComponent={{ icon: "menu", color: "#fff" }}
      placement="center"
    />

<View style={styles.top_out}>
          <View style={styles.top}>
          <ImageBackground  style= { styles.backgroundImage } source={require('./assets/bg1.png')} >
            <Chip
              
              title=" SEARCH     "
              titleStyle={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              }}
             
              loadingProps={{ animating: true }}
              onPress={() => alert("clicked search!")}
              icon={{
              name: "place",
              type: "material",
              size: 25,
              color: 'white',
              padding: 10,
              }}
            />
          </ImageBackground>
          </View>

          <View style={{ height: 5,}} />
        </View>
        <Card style={styles.box_shadow}>
  <Card.Title style={{color:"#2089dc", fontSize:20, fontWeight:"bold"}}>MY PARKING LOT</Card.Title>
  <Card.Divider/>
  <Card.Image source={require('./assets/map_bg.jpg')}>
  </Card.Image>
    <Button
      icon={<Icon name='map' color='#ffffff' />}
      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
      title=' NAVIGATE ME' titleStyle={{fontSize:17}} />
   <PricingCard
  color="#4f9deb"
  title="BOOKED"
  price="$00.00"
  info={['Id : 120391', 'Ace Mall, Northwest Street, Thanjavur.', ]}
  button={{ title: 'PAY NOW', icon: 'attach-money', size : 15 }}
/>
  
</Card>
       
<View style={styles.top_out}></View>
    <StatusBar style="auto" />
    </ScrollView>
    </SafeAreaProvider>
  );
}





const styles = StyleSheet.create({

  container: {
    backgroundColor: "#f2f5fa",
  },

  box_shadow: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
  },

  top_out: {
    paddingTop: 20,
    alignSelf: "center",
  },

  top: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
    width: (Dimensions.get('window').width - 30),
    height: 180,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    
  },

  backgroundImage:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    opacity: 1
},

});
