import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type MyButtonProps = {
     title: string;
     onPress: () => void;

};

const MyButton = ({ title, onPress }: MyButtonProps) => {
     return (
          <View>
               <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={onPress}>
                    <Text style={styles.text}>{title}</Text>
               </TouchableOpacity>
          </View>
     );
};

const styles = StyleSheet.create({
     button: {
          backgroundColor: 'orange',
          paddingVertical: 15,
          borderRadius: 10,
          alignItems: "center"
     },
     text: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
     },
});

export default MyButton;
