/*This is the Homepage where users will be able to see important annouceements, events, and other important information*/


import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events</Text>
      {/* Later you will list events here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
