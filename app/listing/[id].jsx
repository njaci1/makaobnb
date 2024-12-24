import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Page = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  return (
    <View>
      <Text>More fire</Text>
    </View>
  );
};

export default Page;
