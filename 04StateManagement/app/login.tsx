import { View, Text, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyButton } from '@/components/import'

const Login = () => {
     const [value, setValue] = useState({
          value1: "",
          value2: ""
     });
     // console.log("Calling.r..")

     useEffect(() => {
          console.log("Calling...")

     }, [value.value1])
     const onLogin = () => {
          console.log(Number(value?.value1) + Number(value?.value2));
     };

     return (
          <View style={{ flex: 1 }}>
               <Image
                    source={require("@/assets/myImage/login.jpg")}
                    style={{ width: "100%", height: 400, backgroundColor: "red" }}
                    resizeMode='cover'
               />
               <View style={{ padding: 20, gap: 20 }}>
                    <TextInput
                         placeholder='Enter your Email'
                         style={{
                              borderWidth: 1,
                              height: 50,
                              paddingHorizontal: 20,
                              borderRadius: 10
                         }}
                         onChangeText={(e) => setValue(value => ({ ...value, value1: e }))}
                    />
                    <TextInput
                         placeholder='Enter your Password'
                         style={{
                              borderWidth: 1,
                              height: 50,
                              paddingHorizontal: 20,
                              borderRadius: 10
                         }}
                         // secureTextEntry
                         onChangeText={(e) => setValue(value => ({ ...value, value2: e }))}
                    />
                    <MyButton title="Login" onPress={onLogin} />
               </View>
          </View>
     );
};

export default Login;
