/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./src/store/reducers"
import {name as appName} from './app.json';
import React from 'react'
const store = createStore(rootReducer, applyMiddleware(thunk));
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from "./src/containers/NavigationContainer";

AppRegistry.registerComponent(appName, () =>

            <NavigationContainer>
                <AppNavigation/>
            </NavigationContainer>

);