import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'

const Login = () => {
     return (
          // <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginTop: 30,  padding: 20 }}>
          //      {
          //           [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => {
          //                return (
          //                     <View key={item} style={{ width: 100, height: 100, backgroundColor: "red", marginRight: 20 }} />
          //                )
          //           })
          //      }
          // </ScrollView>
          <View style={{ padding: 5 }}>
               <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    // horizontal
                    contentContainerStyle={{ marginTop: 30 }}
                    numColumns={3}
                    ListHeaderComponent={
                         <View style={{
                              width: "100%",
                              height: 200,
                              backgroundColor: "blue"
                         }}></View>
                    }
                    ListFooterComponent={
                         <View style={{
                              width: "100%",
                              height: 200,
                              backgroundColor: "yellow"
                         }}></View>
                    }
                    renderItem={(item) => {
                         return (
                              <View style={{
                                   width: 106,
                                   height: 106,
                                   backgroundColor: "red",
                                   margin: 5,
                                   justifyContent: "center",
                                   alignItems: "center"
                              }}>
                                   <Text >{item.item}</Text>
                              </View>
                         )
                    }}
               />

          </View>

     )
}

export default Login