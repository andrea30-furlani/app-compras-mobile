import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import AppItem from './AppItem';
import Database from './Database';
 

export default function AppList(route, navigation){

const [items, setItems] = useState([]);
  
 useEffect(() => {
      Database.getItems().then(items => setItems(items));
  }, [route]);


return (
  <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Lista de Compras</Text>
      <ScrollView 
          style={styles.scrollContainer}
          contentContainerStyle={styles.itemsContainer}>
          { items.map(item => {
              return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} />
          }) }
      </ScrollView>
  </View>
  );
}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: 20,
      width: '100%'
    },

    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,

    },

    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'

    },

    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'

    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',

    },

    textItem: {
        fontSize: 20,

    }

  });

