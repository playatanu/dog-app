import React from 'react';
import axios from 'axios';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
  FlatList,
} from 'react-native';

//https://dog.ceo/api/breed/akita/images
export default function DogScreen({navigation, route}) {
  const showToast = err => {
    ToastAndroid.show(err, ToastAndroid.SHORT);
  };

  const {dogName} = route.params;
  const [dogImageList, setDogImageList] = React.useState();
  const [isLoding, setIsLoading] = React.useState(true);

  const getDogImage = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        'https://dog.ceo/api/breed/' + dogName + '/images',
      );
      setDogImageList(res.data.message);
      setIsLoading(false);
    } catch (error) {
      showToast(error.message);
    }
  };
  React.useEffect(() => {
    getDogImage();
  }, []);
  return (
    <View>
      {isLoding ? (
        <View style={styles.main}>
          <ActivityIndicator size="large" color="#0196FE" />
        </View>
      ) : (
        <FlatList
          data={dogImageList}
          renderItem={({item, index}) => <DogFream dogUrl={item} />}
        />
      )}
    </View>
  );
}

const DogFream = ({dogUrl, dogName}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{uri: dogUrl}} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    margin: 20,
    padding: 8,
    width: '90%',
    height: 450,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 350,
  },
});
