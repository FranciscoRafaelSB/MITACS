import React from 'react'
import { Image, View } from 'react-native';

export const WhiteLogo = () => {
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Image
            source={ require('../assets/utrblanca.jpg')}
            style={{
                width:110,
                height:100,
                borderRadius:50
            }}
            />
            
        </View>
    )
}
