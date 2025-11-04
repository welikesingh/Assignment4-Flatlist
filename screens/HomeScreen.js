import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native';

const apps = [
  { id: '1', title: 'Calls', image: 'https://img.icons8.com/ios-filled/100/4CAF50/phone.png', message: 'Make calls from Here' },
  { id: '2', title: 'Camera', image: 'https://img.icons8.com/ios-filled/100/000000/camera.png', message: 'Welcome to the camera app' },
  { id: '3', title: 'Messages', image: 'https://img.icons8.com/ios-filled/100/4CAF50/speech-bubble.png', message: 'Welcome to your Messages' },
  { id: '4', title: 'Music', image: 'https://img.icons8.com/?size=100&id=81TSi6Gqk0tm&format=png&color=000000', message: 'Welcome to the Music Selection Screen' },
  { id: '5', title: 'Photos', image: 'https://img.icons8.com/?size=100&id=18945&format=png&color=000000', message: 'Welcome to the Photos Screen' },
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('AppScreen', { title: item.title, message: item.message })}
    >
      <Image source={{ uri: item.image }} style={styles.icon} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
      <FlatList
        data={apps}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // makes it two columns (grid layout)
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    padding: 10,
    marginTop:40,
  },
  listContainer: {
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    maxWidth: '45%', // prevent full-width stretching
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});