import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlexBox from '@/screens/FlexBox';
import Home from '@/screens/Home';
import LearnFirst from '@/screens/LearnFirst';

const Stack = createNativeStackNavigator();

export type RootStackNavigateParamList = {
  Home: undefined;
  Detail: undefined;
};

function App(): React.JSX.Element {
  // const [listAnime, setListAnime] = useState();
  // console.log(listAnime);

  // const fetchListAnime = async () => {
  //   try {
  //     const fetchedData = await axios.get('https://api.jikan.moe/v4/top/anime');
  //     return setListAnime(fetchedData.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchListAnime();
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='FlexBox' component={FlexBox} />
        <Stack.Screen name='LearnFirst' component={LearnFirst} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
