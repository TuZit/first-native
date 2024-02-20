import PokemonCard from '@/components/Learning/PokemonCard';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text } from 'react-native';

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
    for (let i = 1; i <= 150; i++) {
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

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <ScrollView>
      <FlatList
        data={pokemonList}
        renderItem={({ item }) => <PokemonCard {...item} />}
        keyExtractor={item => item.id}
        // ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
        ListEmptyComponent={<Text>Empty! No items found</Text>}
      />
    </ScrollView>
  );
};

export default Pokemon;
