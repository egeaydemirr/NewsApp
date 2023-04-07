import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Details = ({route, navigation}) => {
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: data.getUrl()}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{data.getTitle()}</Text>
        <Text style={styles.subtitle}>Author: {data.getAuthor()}</Text>
      </View>
    </View>
  );
};

//

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 16,
  },
});

export default Details;
