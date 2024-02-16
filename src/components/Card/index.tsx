import React from 'react';
import {Image, Text, View} from 'react-native';

type Props = {
  src: string;
  title: string;
  producers: {
    name: string;
  }[];
};

const CommonCard = (props: Props) => {
  const {src, title, producers} = props;

  return (
    <View>
      <Image src={src} />
      <View>
        <Text>{title}</Text>
      </View>
      <View>
        <Text>{producers.map(item => item.name).join(', ')}</Text>
      </View>
    </View>
  );
};

export default CommonCard;
