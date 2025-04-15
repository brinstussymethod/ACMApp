import {Text, View, Button, StyleSheet, Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
export default function Index() {

  const nextEvent = {
    name: 'Hackathon Kickoff',
    date: '2025-04-20',
    location: 'Room 101'
  };

  return (
    <LinearGradient
    colors={['#00c6ff', '#0072ff']}
    style = {styles.container}>

      <View style = {styles.logoContainer}> 
      <Image
      source = {require('../assets/images/acm-logo.png')}
      style={{width: 150, height: 150, marginBottom: 24}}/>
      </View>
      <Text style = {styles.welcome}>Welcome to the ACM Club!</Text>

      <View style = {styles.eventBox}>
        <Text style = {styles.eventTitle}>Upcoming Event</Text>
        <Text style = {styles.eventName}>{nextEvent.name}</Text>
        <Text style = {styles.eventDetail}>{nextEvent.date}</Text>
      </View>

      <Button title="view all events" onPress={() => console.log("Go to events tab")}></Button>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  
  
  container: {
    flex: 1,
    width: '100%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f2f2f2'
  },

  logoContainer: {
    width: 100, 
    height: 100, 
    backgroundColor: 'white', 
    borderRadius: 80, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 24, 
    shadowColor: '#000', 
    shadowOffset: {width: 0, height: 4}, 
    shadowOpacity: 0.3, 
    shadowRadius: 5, 
    elevation: 8,
  },

  welcome: {
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 16, 
    textAlign: 'center'
  },

  eventBox: {
    marginBottom: 24, 
    padding: 10, 
    borderWidth: 1, 
    borderRadius: 8, 
    width: '90%', 
    alignItems: 'center'
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  eventDetail: {
    fontSize: 16,
    color: 'gray'
  },

  }
)