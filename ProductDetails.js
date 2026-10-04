import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function ProductDetails({ route, navigation }) {

  const { product } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.icon}>
        📦
      </Text>

      <Text style={styles.name}>
        {product.name}
      </Text>

      <Text style={styles.price}>
        ₱{product.price}
      </Text>

      <View style={styles.box}>

        <Text style={styles.label}>
          Description
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          ← Back to Gadgets
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F2F5F9',
    padding: 25
  },

  icon: {
    fontSize: 80,
    marginTop: 30,
    marginBottom: 15
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172B4D',
    textAlign: 'center'
  },

  price: {
    fontSize: 24,
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 10
  },

  box: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginTop: 30,
    elevation: 3
  },

  label: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#172B4D'
  },

  description: {
    fontSize: 17,
    color: '#667085',
    lineHeight: 25
  },

  backButton: {
    width: '100%',
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});