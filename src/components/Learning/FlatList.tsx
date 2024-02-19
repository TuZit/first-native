import React from 'react';
import { Text, View, FlatList } from 'react-native';

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const FlatListMock = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <View>
      <Text>FlatList</Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default FlatListMock;
