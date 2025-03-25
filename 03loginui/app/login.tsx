import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { MyButton } from '@/components/import'
import { useRouter } from 'expo-router';

const Login = () => {
     const router = useRouter();

     const onLogin = () => {
          router.push("/register");
     }
     return (
          <View style={{ flex: 1 }}>
               <Image
                    source={require("@/assets/myImage/login.jpg")}
                    style={{ width: "100%", height: 400, backgroundColor: "red" }}
                    resizeMode='cover'

               />
               <View style={{ padding: 20, gap: 20 }}>
                    <TextInput placeholder='Enter your Email' style={{
                         borderWidth: 1,
                         height: 50,
                         paddingHorizontal: 20,
                         borderRadius: 10
                    }}
                         onChangeText={(e) => console.log(e)} />
                    <TextInput placeholder='Enter your Password' style={{
                         borderWidth: 1,
                         height: 50,
                         paddingHorizontal: 20,
                         borderRadius: 10
                    }} />
                    <MyButton title="Login" onPress={onLogin} />
               </View>
          </View >
     )
}

export default Login