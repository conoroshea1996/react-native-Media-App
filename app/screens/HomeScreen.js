import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

const HomeScreen = (props) => {
    return (
        <View>
            <Text> HomeScreen </Text>
            <Button onPress={() => props.navigation.navigate('Settings')} title='Go to Settings'>  </Button>
        </View>
    )
}

export default HomeScreen