import React from 'react'
import { Text, View, KeyboardAvoidingView, Platform,TextInput, TouchableOpacity, Keyboard } from 'react-native';

import { loginStyles } from '../theme/logintTheme';

import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any>{}


export const RegisterScreen = ({navigation}: Props) => {

    const {email, password, name, onChange} = useForm({
        name: '',
        email: '',
        password: ''
    });
    const onRegister = ()=>{
        console.log({email,password,name});
        Keyboard.dismiss();
        
    }

   
    return (
        <>

         <KeyboardAvoidingView
         style={{flex:1, backgroundColor: '#040c24'}}
         behavior={(Platform.OS === 'ios') ? 'padding' : 'height' }
         >
 
            <View style={loginStyles.formContainer}>

            {/* Keyboard avoid view */}
                <WhiteLogo/>
                
                <Text style={loginStyles.title}>
                 
                Welcome to your MITACS process!
                </Text>

                 <Text style={loginStyles.label}>Full Name:</Text>
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="rgba(255,255,255,0.4)"
                    underlineColorAndroid="white"
                    style={[
                        loginStyles.inputField,
                    (Platform.OS === 'ios')  && loginStyles.inputFieldIOS
                ]}
                selectionColor="white"

                //TODO: onChange,value
                onChangeText={ (value)=> onChange(value, 'email')}
                value={email}
                onSubmitEditing={onRegister}

                autoCapitalize="words"
                autoCorrect={false}
                />


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
                onSubmitEditing={onRegister}

                autoCapitalize="none"
                autoCorrect={false}
                /> 

                {/* Here was the password field */}
                <Text style={loginStyles.label}>Major:</Text>
                <TextInput
                    placeholder="Major"
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
                onSubmitEditing={onRegister}

                autoCapitalize="none"
                autoCorrect={false}
                /> 

                {/* Button Login */}

                 <View style={ loginStyles.buttonContainer }>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={loginStyles.button}
                        onPress={onRegister}
                        >
                        <Text style={loginStyles.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>
                </View> 

                {/* Crear una nueva cuenta */}
                <TouchableOpacity
                    onPress={()=> navigation.replace('LoginScreen')}
                    activeOpacity={0.8}
                    style={loginStyles.buttonReturn}
                >
                    <Text style={loginStyles.buttonText}>Logout</Text>

                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>

        </>
    )
}