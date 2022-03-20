import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.push('Home')}>
          <Text>profile Screens</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
