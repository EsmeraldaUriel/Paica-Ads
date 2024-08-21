// screens/FrameListScreen.js
import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const frames = [
  { id: '1', name: 'Frame 1' },
  { id: '2', name: 'Frame 2' },
  { id: '3', name: 'Frame 3' },
  // Add more frames as needed
];

const FrameListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frame List</Text>
      <FlatList
        data={frames}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Frame", { frameId: item.id })}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default FrameListScreen;