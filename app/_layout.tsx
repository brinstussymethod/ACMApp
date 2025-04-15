import { Tabs } from "expo-router";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Button, View } from 'react-native';

export default function RootLayout() {
 

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#0072ff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#282A2E', height: 55, paddingBottom: 2 },
          tabBarBadgeStyle: {color: 'black', backgroundColor: 'blue'}
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            )
          }}
        />
          <Tabs.Screen
            name="signin"
            options={{
              title: 'Sign In',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="log-in-outline" size={size} color={color} />
              )
            }}
          />
          <Tabs.Screen
            name="events"
            options={{
              title: "Events",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="calendar-outline" size={size} color={color} />
                )
              }}
          />
          <Tabs.Screen
            name="tasks"
            options={{
              title: 'Tasks',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="checkbox-outline" size={size} color={color} />
                )
              }}
          />
          <Tabs.Screen
            name="donations"
            options={{
              title: 'Donate',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="cash-outline" size={size} color={color} />
                )
              }}
          />
      </Tabs>
    </View>
  );
}