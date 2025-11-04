import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppScreen({ route }) {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});