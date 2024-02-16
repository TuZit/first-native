import React, {useState} from 'react';
import {
  Button,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
  Pressable,
  Modal,
  StatusBar,
  Alert,
} from 'react-native';

const ImageNe = () => {
  const [showModal, setShowModal] = useState(false);
  const [showStatusBar, setShowStatusBar] = useState(false);

  return (
    <View>
      {/* StatusBar là để kiểm soát phần thanh % pin, thông báo tren đỉnh màn hinhf */}
      {/* prop backgroundColor chỉ hoạt động với Android */}
      <StatusBar
        backgroundColor={'lightgreen'}
        barStyle={'dark-content'}
        hidden={showStatusBar}
      />
      <Button
        title="Toggle StatusBar"
        onPress={() => setShowStatusBar(!showStatusBar)}
      />
      <ScrollView>
        <Text>
          Mau <Text style={{color: 'red'}}>Do</Text> ne
        </Text>

        <Button
          title="Press Here -> Modal"
          onPress={() => setShowModal(true)}
          color={'midnightblue'}
        />

        {/* Component Pressable cho phesp tạo action khi nhấn với bất kỳ child nào bên trong nó */}
        <Pressable onPress={() => console.log('Press the Image')}>
          <Image
            source={{uri: 'https://picsum.photos/300'}}
            width={300}
            height={300}
          />
        </Pressable>
        <View>
          <ImageBackground source={{uri: 'https://picsum.photos/300'}}>
            <Text style={{color: '#FFF'}}>aaaaa</Text>
          </ImageBackground>
        </View>
        <View>
          <Text>
            iopfiopsi sfiopsfi fipsfipsfi pfipsfipsfipsfi sfipsifpoitp ruruio f
            dvfdvher fdh erh ferhruheru hdhfh erhriuhr iopfiopsi sfiopsfi
            fipsfipsfi pfipsfipsfipsfi sfipsifpoitp ruruio f dvfdvher fdh erh
            ferhruheru hdhfh erhriuhr iopfiopsi sfiopsfi fipsfipsfi
            pfipsfipsfipsfi sfipsifpoitp ruruio f dvfdvher fdh erh ferhruheru
            hdhfh erhriuhr iopfiopsi sfiopsfi fipsfipsfi pfipsfipsfipsfi
            sfipsifpoitp ruruio f dvfdvher fdh erh ferhruheru hdhfh erhriuhr
            iopfiopsi sfiopsfi fipsfipsfi pfipsfipsfipsfi sfipsifpoitp ruruio f
            dvfdvher fdh erh ferhruheru hdhfh erhriuhriopfiopsi sfiopsfi
            fipsfipsfi pfipsfipsfipsfi sfipsifpoitp ruruio f dvfdvher fdh erh
            ferhruheru hdhfh erhriuhr iopfiopsi sfiopsfi fipsfipsfi
            pfipsfipsfipsfi sfipsifpoitp ruruio f dvfdvher fdh erh ferhruheru
            hdhfh erhriuhr iopfiopsi sfiopsfi fipsfipsfi pfipsfipsfipsfi
            sfipsifpoitp ruruio f dvfdvher fdh erh ferhruheru hdhfh erhriuhr
            iopfiopsi sfiopsfi fipsfipsfi pfipsfipsfipsfi sfipsifpoitp ruruio f
            dvfdvher fdh erh ferhruheru hdhfh erhriuhr
          </Text>
        </View>
      </ScrollView>

      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
        animationType="fade"
        presentationStyle="pageSheet">
        <View style={{flex: 1, padding: 60}}>
          <Text>Modal ne</Text>
          <Button title="Click!" onPress={() => setShowModal(false)} />
        </View>
      </Modal>

      <View>
        {/* Component Alert giúp tạo 1 dialog thông báo lên màn hình */}
        <Button
          title="Show Alert"
          onPress={() => Alert.alert('This a alert mess')}
        />
        <Button
          title="Show Alert 2"
          onPress={() => Alert.alert('This a alert mess', 'Multiple Alert')}
        />
        <Button
          title="Alert 3"
          onPress={() =>
            Alert.alert('This a alert mess', 'Multiple Level Alert', [
              {
                text: 'Cancle',
                onPress: () => console.log('Cancle'),
              },
              {
                text: 'OK',
                onPress: () => console.log('OK'),
              },
            ])
          }
        />
      </View>
    </View>
  );
};

export default ImageNe;
