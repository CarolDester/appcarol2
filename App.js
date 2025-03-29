import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

import The8Image from './assets/the8.png';
import SCoupsImage from './assets/Scoups.png';
import JeonghanImage from './assets/jeonghan.png';
import JoshuaImage from './assets/joshua.png';
import JunImage from './assets/junhui.png';
import HoshiImage from './assets/hoshi.png';
import WonwooImage from './assets/wonwoo.png';
import WooziImage from './assets/woozi.png';
import DKImage from './assets/dk.png';
import MingyuImage from './assets/mingyu.png';
import SeungkwanImage from './assets/seungkwan.png';
import VernonImage from './assets/vernon.png';
import DinoImage from './assets/dino.png';
import Capa from './assets/seventeen.png';

const members = [
  { name: 'The8', image: The8Image },
  { name: 'S.Coups', image: SCoupsImage },
  { name: 'Jeonghan', image: JeonghanImage },
  { name: 'Joshua', image: JoshuaImage },
  { name: 'Jun', image: JunImage },
  { name: 'Hoshi', image: HoshiImage },
  { name: 'Wonwoo', image: WonwooImage },
  { name: 'Woozi', image: WooziImage },
  { name: 'DK', image: DKImage },
  { name: 'Mingyu', image: MingyuImage },
  { name: 'Seungkwan', image: SeungkwanImage },
  { name: 'Vernon', image: VernonImage },
  { name: 'Dino', image: DinoImage }
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Capa} style={styles.cover} />
      <Text style={styles.description}>
        Seventeen é um grupo sul-coreano composto por 13 integrantes, ativo desde maio de 2015. {'\n'}
        Ao longo de sua carreira, eles alcançaram um grande público e se tornaram um grupo de K-pop reconhecido
        internacionalmente por suas músicas e performances características.
      </Text>
      <FlatList
        data={members}
        keyExtractor={(item) => item.name}
        numColumns={1}  // Mudar para 1 para exibir em uma coluna
        contentContainerStyle={styles.membersContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.memberImage} />
            <Text style={styles.memberName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  cover: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#333',
  },
  membersContainer: {
    alignItems: 'center',
  },
  card: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,  
    padding: 10,
    backgroundColor: '#f1f1f1',  
    borderRadius: 10,  
    elevation: 2,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  memberImage: {
    width: 150,  
    height: 150, 
    marginBottom: 10,  
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Home;
