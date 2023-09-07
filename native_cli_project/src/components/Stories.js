import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const storyInfo = [
  {
    id: 1,
    name: '나의 스토리',
    image: require('../../assets/images/userProfile.jpeg'),
  },
  {
    id: 0,
    name: 'john',
    image: require('../../assets/images/profile1.jpeg'),
  },
  {
    id: 0,
    name: 'tonny',
    image: require('../../assets/images/profile2.jpeg'),
  },
  {
    id: 0,
    name: 'daniel',
    image: require('../../assets/images/profile3.jpeg'),
  },
  ,
  {
    id: 0,
    name: 'sojeong',
    image: require('../../assets/images/profile4.jpeg'),
  },
  ,
  {
    id: 0,
    name: 'jaeho',
    image: require('../../assets/images/profile5.jpeg'),
  },
];

const Stories = () => {
  return (
    <ScrollView horizontal={true} style={{paddingVertical: 20}}></ScrollView>
  );
};

export default Stories;
