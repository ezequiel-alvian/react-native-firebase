import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { collection, getDocs } from 'firebase/firestore'
import db from '../../database/database'
import { ListItem, Button } from '@rneui/themed';


const HomeScreen = ({navigation}) => {

  const [getAllUsers, setGetAllUsers] = useState()

  const getData = async() => {
    try{
      const querySnapshot = await getDocs(collection(db, 'users'))
      const users = []
      await querySnapshot.forEach((doc) => {
        const { name, email, phone } = doc.data()
        users.push({
          id: doc.id,
          name,
          email,
          phone
        });
      });
      setGetAllUsers(users)
    }catch(err){ console.error(err) }
  }

  useEffect(()=>{
    getData()
  },[])

  const Item = ({item}) => (
    <ListItem key={item.id}>
      <ListItem.Chevron/>
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )

    return (
      <View >
        <Button
          title="New Usser"
          onPress={()=> navigation.navigate('DetailsScreens')}
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
        />   
        <FlatList
          data={getAllUsers}
          keyExtractor={(item, index) => index}
          renderItem={({item})=> <Item item={item}/>}
        />  
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' 
    },
  })

  export default HomeScreen