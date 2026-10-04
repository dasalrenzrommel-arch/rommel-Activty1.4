import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.logo}>📱</Text>

      <Text style={styles.title}>
        Gadget Store
      </Text>

      <Text style={styles.subtitle}>
        Find your favorite gadgets
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>
          Browse Gadgets
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F5F9',
    padding: 20
  },

  logo: {
    fontSize: 70,
    marginBottom: 15
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#172B4D',
    marginBottom: 8
  },

  subtitle: {
    fontSize: 17,
    color: '#667085',
    marginBottom: 30
  },

  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});