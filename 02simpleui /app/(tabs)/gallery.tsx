import { View, Text, Image } from 'react-native';
import React from 'react';

const Gallery = () => {
     return (
          <View style={{ flex: 1, backgroundColor: '#25292e', alignItems: 'center' }}>
               <View style={{ flex: 1, marginTop: 20 }}>
                    <Image
                         source={{ uri: 'https://images.unsplash.com/photo-1586862118621-d836a30ab3d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D' }}
                         style={{ width: 320, height: 440, borderRadius: 18 }}
                    />
               </View>
          </View>
     );
};

export default Gallery;
