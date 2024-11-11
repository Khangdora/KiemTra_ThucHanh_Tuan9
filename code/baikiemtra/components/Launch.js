import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Launch = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('List');
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView edges={['top']} style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <View style={styles.containerLaunch}>
      <View style={styles.header}>
        <Text style={styles.subtitle}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.content}>
        <Image source={{uri: 'https://i.imgur.com/KHYRH2L.png'}} style={styles.image} />
        <View style={{marginTop:20, marginBottom: 20}}>
        <Text style={styles.productTitle}>POWER BIKE</Text>
        <View style={{ height: 0 }} />
        <Text style={styles.productTitle}>SHOP</Text>
        </View>
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  containerLaunch: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: '#000',
    marginTop: 8,
    fontWeight: '500',
    alignItems: 'center',
    textAlign: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  getStartedButton: {
    backgroundColor: '#f44336',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    justifyContent: 'center'
  },
  getStartedText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Launch;