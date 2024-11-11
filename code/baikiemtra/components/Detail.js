import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
// import { useSelector } from 'react-redux';
// import AddToCart from './AddToCart';

export default function Detail({ route, navigation }) {
  let id = route.params?.id;

  if (!id) { id = "1"; }//Testing

  // const bikesCart = useSelector((state) => state.bikes.bikes);
  // const bikeCart = bikesCart.find((b) => b.id === id);
  // const [isAdded, setIsAdded] = useState(false);

  const checkIfAdded = async () => {
    try {
      const response = await axios.get('https://6458b1134eb3f674df7a739c.mockapi.io/cart');
      const exists = response.data.some(item => item.id_bike === bike.id);
      setIsAdded(exists);
    } catch (error) {
      console.error('Code lỏ:', error);
    }
  };

  useEffect(() => {
    checkIfAdded();
  }, []);

  const [bike, setBike] = useState(null);
  const [isAddCart, setIsAddCart] = useState(false);

  useEffect(() => {
    const fetchBikeDetail = async () => {
      try {
        const response = await axios.get(`https://6458b1134eb3f674df7a739c.mockapi.io/bike/${id}`);
        setBike(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBikeDetail();
  }, [id]);

  if (!bike) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const AddToCart = ({ bikeId, quantity }) => {
    const handleAddToCart = async () => {
      try {
        const response = await axios.post('https://6458b1134eb3f674df7a739c.mockapi.io/cart', {
          id_bike: bikeId,
          quantity: quantity,
        });
        console.log('Đã thêm:', response.data);
      } catch (error) {
        console.error('Lỗi thêm:', error);
      }
    };

    return (
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{ uri: bike.image }} style={styles.image} />
      </View>
      <View style={styles.containerInfomation}>
        <Text style={styles.title}>{bike.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>15% OFF | {bike.price}$ </Text>
          <Text style={styles.discount}>449$</Text>
        </View>
        <Text style={styles.titleDescription}>Description</Text>
        <Text style={styles.description}>{bike.description}</Text>
      </View>
      <View style={styles.footer}>
        <View style={{marginLeft: 20, marginTop: 5}}>
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2084 4.375C6.1819 4.375 2.91669 7.60667 2.91669 11.5937C2.91669 14.8123 4.19273 22.451 16.7534 30.1729C16.9783 30.3098 17.2367 30.3822 17.5 30.3822C17.7634 30.3822 18.0217 30.3098 18.2467 30.1729C30.8073 22.451 32.0834 14.8123 32.0834 11.5937C32.0834 7.60667 28.8181 4.375 24.7917 4.375C20.7652 4.375 17.5 8.75 17.5 8.75C17.5 8.75 14.2348 4.375 10.2084 4.375Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </View>
          <AddToCart bikeId={bike.id} quantity={1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  containerImage: {
    backgroundColor: '#E941411A',
    width: '100%',
    height: 200,
    padding: 5,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  containerInfomation: {
    flex: 1
  },
  titleDescription: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 4
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  discount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    textDecorationLine: 'line-through',
  },
  addToCartButton: {
    backgroundColor: '#E94141',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
    width: '50%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
