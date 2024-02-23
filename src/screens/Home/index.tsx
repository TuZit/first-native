import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Home = () => {
  const navigation = useNavigation<any>();

  const [posts, setPosts] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = (limit: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(response => {
        setTimeout(() => {
          setLoadingPost(false);
        }, 2000);
        return response.json();
      })
      .then(json => setPosts(json));
  };

  useEffect(() => {
    fetchPosts(20);
  }, []);

  if (loadingPost) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator animating={loadingPost} />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    // SafeAreaView: hoạt động với MacOS, kiểu phần content sẽ nằm dưới phần tai thỏ, k bao gồm thanh trạng thái trên-dưới
    <SafeAreaView style={styles.safeView}>
      <View>
        <Button
          title='Go to FlexBox'
          onPress={() =>
            navigation.navigate('FlexBox', {
              title: 'FlexBox Page',
            })
          }
        />
        <Button
          title='Go to Learn First1'
          onPress={() =>
            navigation.navigate('LearnFirst', {
              title: 'Learn First Page',
            })
          }
        />
      </View>
      <View>
        <FlatList
          data={posts}
          renderItem={({ item }: any) => (
            <View style={styles.textContainer}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item: any) => item.id}
          ListEmptyComponent={<Text>Empty!</Text>}
          ListHeaderComponent={<Text>List Post</Text>}
          ListFooterComponent={<Text>List Footer</Text>}
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true);
            await fetchPosts(10);
            setRefreshing(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    // backgroundColor: 'plum',
  },
  textContainer: {
    padding: 12,
    margin: 12,
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  textTitle: {},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});

export default Home;
