import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { ListItem } from '@rneui/themed';
import { DATA } from '../../../database/data'


const StackScreen = () => {

  const Item = ({item}) => {

  
  return(
    <>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.variety}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </>
  )
  }

    return (
      <View >
          <FlatList
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 10
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default StackScreen