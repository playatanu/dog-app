import axios from 'axios';
import React from 'react';
import {
  View,
  FlatList,
  Text,
  ToastAndroid,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import {ListTile} from '../widgets';

export default function HomeScreen({navigation}) {
  const [dogList, setDogList] = React.useState([]);
  const [isLoding, setIsLoading] = React.useState(true);
  const [searchText, setSearchText] = React.useState('');
  const showToast = err => {
    ToastAndroid.show(err, ToastAndroid.SHORT);
  };
  const getDogList = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('https://dog.ceo/api/breeds/list/all');

      const allDogsName = Object.keys(res.data.message);
      setDogList(allDogsName);
      setIsLoading(false);
    } catch (error) {
      showToast(error.message);
    }
  };

  const openStatus = dogName => {
    navigation.navigate('DogScreen', {
      name: dogName,
      dogName: dogName,
    });
  };

  React.useEffect(() => {
    getDogList();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.main}>
        {isLoding ? (
          <View style={styles.lodingContainer}>
            <ActivityIndicator />
            <Text>Retry</Text>
          </View>
        ) : (
          <View>
            <View style={styles.searchBar}>
              <TextInput
                onChangeText={text => setSearchText(text)}
                style={styles.searchInput}
                placeholder="search ..."
              />
            </View>
            <FlatList
              data={dogList.filter(val => {
                if (searchText === '') {
                  return val;
                } else if (
                  val.toLowerCase().includes(searchText.toLocaleLowerCase())
                ) {
                  return val;
                }
              })}
              renderItem={({item, index}) => (
                <ListTile
                  openStatus={openStatus}
                  index={index}
                  dogName={item}
                />
              )}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  lodingContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchBar: {
    height: 50,
    // backgroundColor: 'red',
  },

  searchInput: {
    paddingLeft: 10,
    backgroundColor: 'white',
  },
});
