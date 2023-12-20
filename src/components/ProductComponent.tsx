import {ScrollView, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {Card, Button, IconButton} from 'react-native-paper';
import productList from '../models/productList';
import {useNavigation} from '@react-navigation/native';

export default function ProductComponent() : React.JSX.Element {
  const navigation = useNavigation() as any;
  return (
    <View style={{flex: 1, marginBottom: 10}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
            color: 'black',
          }}>
          Produk teratas
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'grey',
            marginBottom: 8
          }}>
          lihat semua
        </Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        {productList.map((item, index) => (
          <Card
            mode="contained"
            style={styles.card}
            key={index}
            onPress={() => {
              navigation.navigate('Detail', {
                id: item.id,
              });
            }}>
            <Card.Cover source={{uri: item.image}} style={styles.image} />
            <Card.Content style={{paddingTop: 5}}>
              <View style={{marginVertical: 5}}>
                <Text style={{fontWeight: '500', color: 'black'}}>
                  {item.name}
                </Text>
                <Text style={{color: 'grey'}}>Rp. 
                  {new Intl.NumberFormat('id-ID', {
                    currency: 'IDR',
                  }).format(item.price)}
                </Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    columnGap: 10,
  },
  card: {
    backgroundColor: 'white',
    width: 145,
    height: 160,
  },
  image: {
    height: 100,
  },
});
