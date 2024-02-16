import CommonButton from '@/components/Button';
import ImageNe from '@/components/Learning/Image';
import {useNavigation} from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const LearnFirst = () => {
  const navigation = useNavigation();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {/* ActivityIndicator: Hiểu nôm na là hình tròn loading đó */}
        {/* Sử dụng state cho prop: animating để có thể control hoạt động */}
        <ActivityIndicator size={'large'} />
        <ActivityIndicator size={'large'} color="red" />
        <ActivityIndicator size={'large'} color="red" animating={false} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <Button
            title="Go to FlexBox Page"
            onPress={() => navigation.navigate('FlexBox' as never)}
          />
          <Button
            title="Go to Home Page"
            onPress={() => navigation.navigate('Home' as never)}
          />
          <CommonButton />
          <View>
            <ImageNe />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default LearnFirst;
