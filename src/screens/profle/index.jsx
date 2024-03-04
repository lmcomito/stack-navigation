import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Contact() {
    return (
        <View style={styles.container}>
            <Text>homezinha</Text>
            <TouchableOpacity style={styles.navButton} 
            onPress={() => navigation.navigate('Profile')}>
            <Text>profilezinho</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.navButton}
           onPress={() => navigation.navigate('Contact')}>
           <Text>contatozinho</Text>
           </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    navButton: {
      padding: 10,
      margin: 10, 
      backgroundColor: 'blue',
    }
  });
  