import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
  return (
  <Tabs 
  screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:"#0088ff",
    tabBarInactiveTintColor:"#ccc",
    tabBarStyle:{
      backgroundColor:"#fff",
      borderTopColor:"#eee",
      borderTopWidth:1,
      paddingBottom:20,
      paddingTop:10
    },
    tabBarLabelStyle:{
      fontSize:10,
      fontWeight:"bold"
    }

  }}>
    <Tabs.Screen
    name='index'
    options={{
        title:"Todos",
        tabBarIcon:({color,size})=>(
          <Ionicons name='flash-outline' size={size} color={color}/>
        )
    }}

    />
       <Tabs.Screen
    name='settings'
    options={{
        title:"Settings",
        tabBarIcon:({color,size})=>(
          <Ionicons name='settings' size={size} color={color}/>
        )
    }}
    />
  </Tabs>
  
  )
}

export default TabsLayout