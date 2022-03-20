import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ListTile({dogName, index, openStatus}) {
  return (
    <TouchableOpacity onPress={() => openStatus(dogName)}>
      <View style={styles.main}>
        <Text style={styles.index}>{index + 1}</Text>
        <Text>{dogName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    padding: 10,
    marginBottom: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  index: {
    fontSize: 20,
    fontWeight: '600',
    paddingRight: 20,
  },
});
