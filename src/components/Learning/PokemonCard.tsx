import { PokemonItemType } from '@/screens/Pokemon';
import React from 'react';
import { Text, View, StyleSheet, Platform, Image } from 'react-native';

const PokemonCard = (props: PokemonItemType) => {
  const { name, image, type } = props;

  return (
    <View style={sytles.card}>
      <View style={sytles.cardContainer}>
        <Image
          source={{
            uri: `${image}`,
          }}
          accessibilityLabel={name}
          style={sytles.cardImage}
          resizeMode='contain'
        />
      </View>

      <View>
        <Text style={sytles.cardName}>{name}</Text>
        <Text>Type: {type}</Text>
      </View>
    </View>
  );
};

const sytles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevator: 5,
      },
    }),
  },
  cardContainer: {
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  cardName: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardImage: {
    alignSelf: 'center',
    width: '100%',
    height: 100,
  },
});

export default PokemonCard;
