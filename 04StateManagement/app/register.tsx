import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { MyButton } from '@/components/import';

const Register = () => {
     const router = useRouter();

     const onRegister = () => {
          router.push("/login");
     }
     return (
          <View style={{ flex: 1 }}>
               <Image
                    source={require("@/assets/myImage/register.png")}
                    style={{ width: "100%", height: 400, backgroundColor: "red" }}
                    resizeMode='cover'

               />
               <View style={{ padding: 20, gap: 20 }}>
                    <TextInput placeholder='Enter yor Email' style={{
                         borderWidth: 1,
                         height: 50,
                         paddingHorizontal: 20,
                         borderRadius: 10
                    }}
                         onChangeText={(e) => console.log(e)} />
                    <TextInput placeholder='Enter yor Password' style={{
                         borderWidth: 1,
                         height: 50,
                         paddingHorizontal: 20,
                         borderRadius: 10
                    }} />
                    <TextInput placeholder='Re-Enter yor Password' style={{
                         borderWidth: 1,
                         height: 50,
                         paddingHorizontal: 20,
                         borderRadius: 10
                    }} />
                    <MyButton title="Register" onPress={onRegister} />
               </View>
          </View >
     )
}
export default Register