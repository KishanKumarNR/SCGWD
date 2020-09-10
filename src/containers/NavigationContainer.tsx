// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = () => (
    <View>
        <Text>?</Text>
    </View>
)
function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default AppNavigation;