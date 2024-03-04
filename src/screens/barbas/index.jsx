import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles'

export default function Barbas() {
    return (
            <View style={styles.container}>
            <Text>Barbas</Text>
            <TouchableOpacity style={styles.navButton} 
            onPress={() => navigation.navigate('Home')}>
            <Text></Text>
           </TouchableOpacity>
           </View>

    )
}