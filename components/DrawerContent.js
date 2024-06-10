import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
      </View>
      <TouchableOpacity style={styles.item} onPress={() => console.log('Home pressed')}>
        <Text style={styles.itemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => console.log('About pressed')}>
        <Text style={styles.itemText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => console.log('Settings pressed')}>
        <Text style={styles.itemText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => console.log('Help pressed')}>
        <Text style={styles.itemText}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0', 
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', 
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', 
  },
  itemText: {
    fontSize: 18,
    color: '#666', 
  },
});

export default DrawerContent;