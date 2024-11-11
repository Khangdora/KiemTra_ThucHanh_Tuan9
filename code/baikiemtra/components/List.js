import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const showApiURL = "https://6458b1134eb3f674df7a739c.mockapi.io/bike";

export default function List() {

  const navigation = useNavigation();

  const [items, setItems] = useState([]);

  const getItems = () => {
    axios
      .get(showApiURL)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  const handleGetDetail = (id) => {
    navigation.navigate('Detail', { id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.bikeItem} onPress={() => handleGetDetail(item.id)}>
      <Image source={{ uri: item.image }} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikeType}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
    <SafeAreaView edges={['top']} style={styles.container}>
    <View style={styles.containerList}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The world's Best Bike</Text>
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tab}>
            <Text style={[styles.tabText, styles.activeTab]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Mountain</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.bikeList}
      />
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  headerText: {
    color: '#E94141',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E94141'
  },
  tabText: {
    color: '#BEB6B6',
    fontWeight: 'bold',
    elevation: 1,
  },
  activeTab: {
    color: '#E94141',
    elevation: 2,
  },
  bikeList: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  bikeItem: {
    width: '45%',
    alignItems: 'center',
    backgroundColor: '#F7BA8326',
    margin: 7,
    borderRadius: 9,
    padding: 10
  },
  bikeImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  bikeType: {
    color: '#666',
    marginTop: 4,
  },
});
