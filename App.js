import * as React from 'react';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './styles/styles';
import { Colors } from './styles/Colors';



import Icon from 'react-native-vector-icons/FontAwesome';
import Iconf from 'react-native-vector-icons/Feather';
import Icona from 'react-native-vector-icons/AntDesign';
import Iconfa from 'react-native-vector-icons/FontAwesome5';
import Iconi from 'react-native-vector-icons/Ionicons';
import Icone from 'react-native-vector-icons/Entypo';


const myIcon = <Icon name="search" size={30} color="white" />;
const myIcon1 = <Icona name="arrowleft" size={30} color="white" />;
const myIcon2 = <Icona name="heart" size={25} color="rgb(255,98,67)" />;
const myIcon3 = <Iconfa name="scroll" size={22} color="rgb(41,127,238)" />;
const myIcon4 = <Iconi name="sunny-sharp" size={25} color="yellow" />;
const myIcon5 = <Icona name="bells" size={25} color="grey" />;
const myIcon6 = <Icon name="angle-down" size={23} color="black" />;
const myIcon7 = <Icon name="angle-left" size={35} color="black" />;
const myIcon8 = <Icone name="drop" size={23} color="skyblue" />;



function HomeScreen({ navigation }) {
          return (
                  <View style={[styles.flexOne, styles.bgWhite]}>
                  <View style={[styles.flexOne, styles.marginRight32, styles.marginLeft32, ]}>
                   {/* <View styles={{flex:1, marginTop:12, marginRight:20, marginLeft:20}}> */}
                          {/* Header_Block */}
                          <View style={[styles.flexQuarterToOne, styles.row, ]}>
                                  <View style={[styles.flexOne, styles.centerVertical ]}>
                                        {/* {myIcon7} */}
                                  </View>
                                  <View style={[styles.flexFive, ]}></View>
                                  <View style={[styles.flexOneAndQuarter, ]}>
                                                        <Image 
                                                                source={require('./images/elon.jpg')}
                                                                style={{width:60, height:60, borderRadius:30, borderColor:"white"}}
                                                        />
                                  </View>
                          </View>
                          {/* Plants_Library */}
                          <View style={[styles.flexQuarterToOne, styles.row, ]}>
                                  <View style={[styles.flexFive, styles.centerVertical,]}>
                                          <Text style={[styles.fontSize25, styles.fontWeightBold]}>Plants Library</Text>
                                  </View>
                                  <View style={[styles.flexOneAndHalf,  styles.row, ]}>
                                        <View style={[styles.flexTwo, styles.centerVertical, ]}>
                                                <Text style={[styles.fontSize17,  styles.fontWeightBold]}>Plants</Text>
                                        </View>
                                        <View style={[styles.flexHalf, styles.centerVertical, styles.marginTop4 ]}>
                                                <Text>{myIcon6} </Text>
                                        </View>
                                  </View>
                          </View>
                          {/* Indoor_Plants */}
                          <View style={[styles.flexHalf, ]}>
                                  <Text style={[styles.fontSize19, styles.fontWeightBold]}>Indoor Plants</Text>
                          </View>
                        
                        
                          {/* Content_Block */}
                         
                          {/* <ScrollView style={{}}> */}
                          <View style={{flex:5}}>
                                
                                <ScrollView style={{ flex:7,}}>

                                <View style={{flex:9, flexDirection:'row', height:280,}}>
                                          {/* 1_Box */}
                                        <View style={{marginRight:4, flex:1,marginBottom:20, borderWidth:0,}}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image
                                                                source={require('./images/zz.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                        <View style={{ position:'absolute', marginLeft:110, marginTop:10}}><Text style={{}}>{myIcon2}</Text></View>
                                                </View>
                                                <View style= {{flex:2,marginTop:10, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:3}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                         {/* 2_Box */}
                                        <View style={[styles.flexOne, styles.marginTop24,  styles.marginLeft10,]}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image 
                                                                source={require('./images/usaplant.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                </View>
                                                <View style= {{flex:5,marginTop:105, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:7}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                </View>
                                
                                <View style={{flex:9, flexDirection:'row', height:280, borderWidth:0}}>
                                          {/* 3_Box */}
                                        <View style={{marginRight:4, flex:1,marginBottom:20, borderWidth:0,}}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image
                                                                source={require('./images/yellowplant.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                        <View style={{ position:'absolute', marginLeft:110, marginTop:10}}><Text style={{}}>{myIcon2}</Text></View>
                                                </View>
                                                <View style= {{flex:2,marginTop:10, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:3}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                         {/* 4_Box */}
                                        <View style={[styles.flexOne, styles.marginTop24,  styles.marginLeft10,]}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image 
                                                                source={require('./images/ppl.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                </View>
                                                <View style= {{flex:5,marginTop:105, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:7}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                </View>

                                <View style={{flex:9, flexDirection:'row', height:280, borderWidth:0}}>
                                          
                                          {/* 5_Box */}
                                        <View style={{marginRight:4, flex:1,marginBottom:20, borderWidth:0,}}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image
                                                                source={require('./images/plant5.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        /> 
                                                        
                                                </View>
                                                <View style= {{flex:2,marginTop:10, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:3}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                         {/* 6_Box */}
                                        <View style={[styles.flexOne, styles.marginTop24,  styles.marginLeft10,]}>
                                                <View style= {{flex:18,borderRadius:18, borderWidth:0}}>
                                                        <Image 
                                                                source={require('./images/plant6.jpg')}
                                                                style={{width:150, height:190, borderRadius:25, borderColor:"white"}}
                                                        />
                                                        <View style={{ position:'absolute', marginLeft:110, marginTop:10}}><Text style={{}}>{myIcon2}</Text></View> 
                                                </View>
                                                <View style= {{flex:5,marginTop:105, borderWidth:0}}>
                                                        <Text style={[styles.fontSize19, styles.fontWeightBold]}>Ficus Lorem</Text>
                                                </View>
                                                <View style= {{flex:7}}>
                                                        <Text style={[styles.fontSize13, styles.fontWeightBold ]}>{myIcon8}  2 Weeks   {myIcon4} Low</Text>
                                                </View>
                                        </View>
                                </View>
                
                                </ScrollView>
                                

                          </View>
                          {/* </ScrollView> */}
                          {/* </View> */}
                          
                          
                          {/* <Button
                                  onPress={() => navigation.navigate('Notifications')}
                                  title="Go to notifications"
                          /> */}
                </View>
                </View>
          );
}




function NotificationsScreen({ navigation }) {
      return (
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                      <Button onPress={() => navigation.goBack()} title="Go back home" />
              </View>
      );
}

const Drawer = createDrawerNavigator(

     
        //  drawerContent={props => {
        //         setProgress(props.progress);
        //         return <DrawerContent {...props} token={ token ? true: false } language={language} darkMode={darkMode} menu={menu} showLogout={showLogout} logout={logout} userDetails={userDetails} />;
        //     }}>



        // {
        //         HomeMenu: { screen: HomeScreen,
        //           navigationOptions: {
        //                 header:false, //hide header if not needed so whole screen slide  
              
        //           },
        //       },
        //         Messages: { screen: HomeScreen },
        //         Notifications: { screen: NotificationsScreen },
        //         Badges: { screen: NotificationsScreen },
        //         Leaderboard: { screen: NotificationsScreen },
        //         Profile: { screen: NotificationsScreen },
        //         Logout: { screen: NotificationsScreen }
        //       }
);

export default function App() {
        
        return (
                    <NavigationContainer>
                    {/* navigationOptions: {
                            header: none,
                    }, */}
                            <Drawer.Navigator initialRouteName="Plants Library" >
                            
                            {/* <View style={{flex:1}}><Text>Biotic</Text></View> */}
                                    <Drawer.Screen name="Home "  component={HomeScreen} />
                                    <Drawer.Screen name="Plants Library" component={HomeScreen} />
                                    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                                    <Drawer.Screen name="Your Garden" component={NotificationsScreen} />
                                    <Drawer.Screen name="Plants Scanner" component={NotificationsScreen} />
                                    <Drawer.Screen name="Matcher" component={NotificationsScreen} />
                                    <Drawer.Screen name="Plant Doctor" component={NotificationsScreen} />
                                    <Drawer.Screen name="Socialize" component={NotificationsScreen} />
                                    <Drawer.Screen name="Settings" component={NotificationsScreen} />
                                    <Drawer.Screen name="Log Out" component={NotificationsScreen} />
                            </Drawer.Navigator>
                    </NavigationContainer>
  );
}