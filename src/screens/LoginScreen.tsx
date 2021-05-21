import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/logintTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}
export const LoginScreen = ({navigation}: Props) => {

    const {email, password, onChange} = useForm({
        email: 'st2762@utr.edu.mx',
        password: '123456'
    });
    const onLogin = ()=>{
        console.log({email,password});
        Keyboard.dismiss();
        
    }
    const validation = (email:string, password:string)=>{
        if(email=='st2762@utr.edu.mx' && password=='123456'){
            return navigation.replace('RegisterScreen')
        }

    }


    return (
        <>
        {/* Background */}
         <Background/>

         <KeyboardAvoidingView
         style={{flex:1}}
         behavior={(Platform.OS === 'ios') ? 'padding' : 'height' }
         >
 
            <View style={loginStyles.formContainer}>

            {/* Keyboard avoid view */}
                <WhiteLogo/>

                <Text style={loginStyles.title}>Login</Text>

                <Text style={loginStyles.label}>Email:</Text>
                <TextInput
                    placeholder="Type your institutional email:"
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    keyboardType="email-address"
                    underlineColorAndroid="white"
                    style={[
                        loginStyles.inputField,
                    (Platform.OS === 'ios')  && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"

                //TODO: onChange,value
                onChangeText={ (value)=> onChange(value, 'email')}
                value={email}
                onSubmitEditing={onLogin}

                autoCapitalize="none"
                autoCorrect={false}
                />

                <Text style={loginStyles.label}>Password:</Text>
                <TextInput
                    placeholder="*******"
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    underlineColorAndroid="white"
                    secureTextEntry
                    style={[
                        loginStyles.inputField,
                    (Platform.OS === 'ios')  && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"

                //TODO: onChange,value
                onChangeText={ (value)=> onChange(value, 'password')}
                value={password}
                onSubmitEditing={onLogin}

                autoCapitalize="none"
                autoCorrect={false}
                />

                {/* Button Login */}

                {/* <View style={ loginStyles.buttonContainer }>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyles.button}
                        onPress={()=> navigation.replace('WhiteScreen')}
                        >
                        <Text style={loginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </View> */}

                {/* Crear una nueva cuenta */}
                {/* I used to have "newUserContainer" instead "buttonContainer" */}
                <View style={loginStyles.buttonContainer}>
                    <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyles.button}
                    onPress={ ()=> validation(email,password)}
                    >
                        <Text style={loginStyles.buttonText}>Login </Text>

                    </TouchableOpacity>

                </View>
            </View>
        </KeyboardAvoidingView>

        </>
    )
}
