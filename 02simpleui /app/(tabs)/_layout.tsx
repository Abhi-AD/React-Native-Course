import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
import { View } from 'react-native'

const TapRoot = () => {
     return (
          <Tabs screenOptions={{
               tabBarActiveTintColor: 'red',
               headerStyle: {
                    backgroundColor: 'red',
               },
               headerShadowVisible: false,
               headerTintColor: 'white',
               tabBarStyle: {
                    backgroundColor: 'gray',

               },
          }}>
               <Tabs.Screen
                    name="index"
                    options={{
                         title: "Home",
                         tabBarIcon: ({ color, size, focused }) => (
                              <Ionicons
                                   name={focused ? 'home' : 'home-outline'}
                                   color={color}
                                   size={size || 24}
                              />
                         ),
                    }}
               />
               <Tabs.Screen
                    name="about"
                    options={{
                         title: "About Us",
                         tabBarIcon: ({ color, size }) => (
                              <View style={{
                                   width: 50,
                                   height: 50,
                                   borderRadius: 50,
                                   backgroundColor: "blue",
                                   bottom: 15,
                                   justifyContent: "center",
                                   alignItems: "center",
                              }}>
                                   <Ionicons
                                        name={'information-circle'}
                                        color={color}
                                        size={size || 24}
                                   />
                              </View>
                         ),
                    }}

               />
               <Tabs.Screen
                    name="profile"
                    options={{
                         title: "Profile",
                         tabBarIcon: ({ color, size, focused }) => (
                              <Ionicons
                                   name={focused ? 'person' : 'person-outline'}
                                   color={color}
                                   size={size || 24}
                              />
                         ),
                    }}
               />
               <Tabs.Screen
                    name="gallery"
                    options={{
                         title: "Gallery",
                         tabBarIcon: ({ color, size, focused }) => (
                              <Ionicons
                                   name={focused ? 'images' : 'images-outline'}
                                   color={color}
                                   size={size || 24}
                              />
                         ),
                    }}
               />
          </Tabs>
     )
}

export default TapRoot
