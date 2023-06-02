import React, { useState } from "react";
import { View, TextInput, ScrollView, Button, StyleSheet } from 'react-native'
import { collection, addDoc } from "firebase/firestore"
import db from '../../database/database'


const UserCreateScreen = ({navigation}) => {

    const [userData, setUserData] = useState({
        name:'',
        email:'',
        phone:''
    })

    const handleChangeText = (name,value) => {
        setUserData({...userData, [name]:value})
    }

    const addNewUser = async () => {
    try {   
        console.log(userData) 
        const res = await addDoc(collection(db,'users'),{
                name: userData.name,
                email: userData.email,
                phone: userData.phone
            })
        console.log(res)
        navigation.navigate('HomeScreen')
    }
    catch(err) { console.error(err) }
    }  

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='Name'
                    onChangeText={(value) => handleChangeText('name', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='Email'
                    onChangeText={(value) => handleChangeText('email', value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput
                    placeholder='Phone'
                    onChangeText={(value) => handleChangeText('phone', value)}
                />
            </View>
            <View>
                <Button
                title='Save User'
                onPress={()=> addNewUser()}
                />
            </View>
        </ScrollView>
    )
}


 const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 30,
    },
    inputGroup: {
       flex: 1,
       padding: 0,
       marginBottom: 15,
       borderBottomWidth:1,
       borderBottomColor:'#ccc'
    }
 })

export default UserCreateScreen