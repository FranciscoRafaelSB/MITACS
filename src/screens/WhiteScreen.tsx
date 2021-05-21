import React from 'react'
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}

export const WhiteScreen = ({navigation}:Props) => {
    return (
        <View>
            <Text
            >Welcome to your MITACS process!</Text>
            
        </View>
    )
}
