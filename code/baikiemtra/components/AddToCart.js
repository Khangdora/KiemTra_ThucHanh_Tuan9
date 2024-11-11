import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import axios from 'axios';

const AddToCart = ({ bikeId, quantity, onAdd }) => {
  const handleAddToCart = async () => {
    try {
      const response = await axios.post('https://6458b1134eb3f674df7a739c.mockapi.io/cart', {
        id_bike: bikeId,
        quantity: quantity,
      });
      console.log('Thêm vào giỏ hàng:', response.data);
      onAdd();
    } catch (error) {
      console.error('Code lỏ:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
      <Text style={styles.addToCartText}>Add to Cart</Text>
    </TouchableOpacity>
  );
};

export default AddToCart;