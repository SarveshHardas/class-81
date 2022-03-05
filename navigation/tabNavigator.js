import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from " react-native-vector-icons/Ionicons";
import Feed from '../screens/feed';
import CreateStory from '../screens/createStory';

const Tab = createBottomTabNavigator

export default class BottomTabNavigator extends Component
 { 
     render()
    { 
        return (
            <Tab.Navigator screenOptions={({route})=>({
                tabBarIcon:({focused, color, size})=>{
                    var iconName 
                    if(route.name === 'Feed'){
                        iconName=focused?"book":"book-outline"
                    }else if(route.name === 'createStory'){
                        iconName=focused? "create" : "create-outline"
                    }
                    return <Ionicons name={iconName } 
                      size={size}
                      color={color}  />
                }

            })}
            
            tabBarOptions={{
                activeTintColor:"tomato",
                InactiveTintColor:"grey",
            }}
            >
                <Tab.Screen name="Feed"
                 component={Feed} />

                 <Tab.Screen name="createStory"
                 component={CreateStory} />
            </Tab.Navigator>
        )
    }
}