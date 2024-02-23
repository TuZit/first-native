import PokemonCard from '@/components/Learning/PokemonCard';
import React, { useEffect, useState } from 'react';
import { FlatList, Platform, SectionList, StyleSheet, Text, View } from 'react-native';

export type PokemonItemType = {
  id: string;
  name: string;
  image: string;
  type: string[];
};

const Pokemon = () => {
  // Pokemon List State
  const [pokemonList, setListPokemon] = useState<PokemonItemType[]>([]);

  const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 20; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      promises.push(fetch(url).then(res => res.json()));
    }
    Promise.all(promises).then(results => {
      const pokemon = results.map(result => ({
        name: result.name,
        image: result.sprites.front_default,
        type: result.types
          .map(
            (type: {
              type: {
                name: string;
              };
            }) => type.type.name,
          )
          .join(', '),
        id: result.id,
      }));
      setListPokemon(pokemon);
    });
  };

  const sectionListData = [
    {
      type: 'Grass',
      data: ['bulbasaur', 'ivysaur', 'venusaur'],
    },
    {
      type: 'Fire',
      data: ['chalamander', 'charmeleon', 'charizard'],
    },
    {
      type: 'Water',
      data: ['squirtle', 'wartortle', 'blastoise'],
    },
  ];

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <View>
      <View>
        <Text>Flat List List</Text>
      </View>
      <View>
        <FlatList
          data={pokemonList}
          renderItem={({ item }) => <PokemonCard {...item} />}
          keyExtractor={item => item.id}
          // ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
          ListEmptyComponent={<Text>Empty! No items found</Text>}
        />
      </View>

      <View>
        <Text>Section List</Text>
      </View>

      <View>
        <SectionList
          sections={sectionListData}
          renderItem={({ item }) => (
            <View style={sytles.card}>
              <Text style={sytles.cardName}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section }) => <Text>{section.type}</Text>}
          SectionSeparatorComponent={() => <View style={{ height: 10, backgroundColor: '#ddd' }} />}
        />
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

export default Pokemon;
