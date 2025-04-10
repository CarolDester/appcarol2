import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import capaImg from "./assets/seventeen.png";
import sCoupsImg from "./assets/Scoups.png";
import jeonghanImg from "./assets/jeonghan.png";
import joshuaImg from "./assets/joshua.png";
import junImg from "./assets/junhui.png";
import hoshiImg from "./assets/hoshi.png";
import wonwooImg from "./assets/wonwoo.png";
import wooziImg from "./assets/woozi.png";
import dkImg from "./assets/dk.png";
import mingyuImg from "./assets/mingyu.png";
import the8Img from "./assets/the8.png";
import seungkwanImg from "./assets/seungkwan.png";
import vernonImg from "./assets/vernon.png";
import dinoImg from "./assets/dino.png";


const members = [
  {
    name: "S.Coups",
    realName: "Choi Seungcheol",
    image: sCoupsImg,
    description: "S.Coups é o líder carismático do Seventeen e do hip-hop team. Ele tem uma vibe tranquila, mas é super protetor com os membros. Sempre mostra liderança com muito carinho e responsabilidade. Um verdadeiro paizão do grupo.",
    birth: "1995-08-08",
    height: "178 cm",
    sign: "Leão",
    position: "Líder, Rapper"
  },
  {
    name: "Jeonghan",
    realName: "Yoon Jeonghan",
    image: jeonghanImg,
    description: "Jeonghan é conhecido por seu charme e jeito esperto de lidar com tudo. Ele adora brincar e pregar peças nos membros, mas também cuida deles como um anjo. Uma mistura de travessura e carinho.",
    birth: "1995-10-04",
    height: "178 cm",
    sign: "Libra",
    position: "Vocal"
  },
  {
    name: "Joshua",
    realName: "Hong Jisoo",
    image: joshuaImg,
    description: "Joshua é o “príncipe calmo” do grupo. Super educado e cheio de classe, ele tem um jeitinho doce que conquista geral. Fala inglês fluentemente e adora cantar com emoção.",
    birth: "1995-12-30",
    height: "177 cm",
    sign: "Capricórnio",
    position: "Vocal"
  },
  {
    name: "Jun",
    realName: "Wen Junhui",
    image: junImg,
    description:"Jun é chinês e super talentoso, tanto como dançarino quanto como cantor. Ele tem um humor sutil e um jeitinho misterioso que encanta. Também é muito sensível e gentil com todo mundo.",    
    birth: "1996-06-10",
    height: "182 cm",
    sign: "Gêmeos",
    position: "Performance"
  },
  {
    name: "Hoshi",
    realName: "Kwon Soonyoung",
    image: hoshiImg,
    description: "Hoshi é o cérebro por trás das coreografias poderosas do Seventeen. Ele vive com uma energia absurda e está sempre animado. Ama tigres e se autodenomina 10/10, por causa dos olhos puxados.",
    birth: "1996-06-15",
    height: "178 cm",
    sign: "Gêmeos",
    position: "Performance"
  },
  {
    name: "Wonwoo",
    realName: "Jeon Wonwoo",
    image: wonwooImg,
    description: "Wonwoo tem uma vibe mais quieta e introspectiva, mas seu senso de humor é único. É super fofo quando sorri e tem uma voz grave incrível. Nerdzinho dos games e da leitura!",
    birth: "1996-07-17",
    height: "182 cm",
    sign: "Câncer",
    position: "Rapper"
  },
  {
    name: "Woozi",
    realName: "Lee Jihoon",
    image: wooziImg,
    description: "Woozi é o produtor musical do grupo — e manda MUITO bem. Ele é pequeno no tamanho, mas gigante no talento. Super perfeccionista, vive no estúdio criando hits. Meio sério, mas um doce por dentro.",
    birth: "1996-11-22",
    height: "165 cm",
    sign: "Escorpião",
    position: "Vocal, Produtor"
  },
  {
    name: "DK",
    realName: "Lee Seokmin",
    image: dkImg,
    description: "DK tem uma das vozes mais marcantes do Seventeen. Ele é alto astral, vive rindo e fazendo piada. Está sempre animado e traz uma energia boa pra onde quer que vá. Um raio de sol!",
    birth: "1997-02-18",
    height: "179 cm",
    sign: "Aquário",
    position: "Vocal"
  },
  {
    name: "Mingyu",
    realName: "Kim Mingyu",
    image: mingyuImg,
    description: "",
    birth: "1997-04-06",
    height: "187 cm",
    sign: "Áries",
    position: "Rapper"
  },
  {
    name: "The8",
    realName: "Xu Minghao",
    image: the8Img,
    description:
      "Membro chinês, exímio dançarino e artista visual, também muito ligado à moda.",
    birth: "1997-11-07",
    height: "178 cm",
    sign: "Escorpião",
    position: "Performance"
  },
  {
    name: "Seungkwan",
    realName: "Boo Seungkwan",
    image: seungkwanImg,
    description:
      "Conhecido por sua voz potente e por ser o rei das variedades. Brilha no palco e na TV.",
    birth: "1998-01-16",
    height: "174 cm",
    sign: "Capricórnio",
    position: "Vocal"
  },
  {
    name: "Vernon",
    realName: "Hansol Vernon Chwe",
    image: vernonImg,
    description:
      "Misto de coreano com americano, rapper fluente em inglês com um estilo único.",
    birth: "1998-02-18",
    height: "178 cm",
    sign: "Aquário",
    position: "Rapper"
  },
  {
    name: "Dino",
    realName: "Lee Chan",
    image: dinoImg,
    description:
      "O maknae (mais novo), membro da performance unit, conhecido por sua técnica de dança afiada.",
    birth: "1999-02-11",
    height: "174 cm",
    sign: "Aquário",
    position: "Performance"
  }
];


const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={capaImg} style={styles.capa} />

      <Text style={styles.seventeenDescription}>
        SEVENTEEN é um grupo sul-coreano formado pela PLEDIS Entertainment. Composto por 13 membros super talentosos, o grupo é conhecido por sua incrível sincronia nas coreografias, produções autorais e diversidade musical. Eles são divididos em três units: Hip-Hop, Vocal e Performance, e participam ativamente de todas as etapas criativas. Um verdadeiro exemplo de trabalho em equipe e talento multifacetado!
      </Text>


      {members.map((member, index) => (
        <View key={index} style={styles.card}>
          <Image source={member.image} style={styles.image} />
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.realName}>{member.realName}</Text>
          <Text style={styles.description}>{member.description}</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Data de Nascimento: {member.birth}</Text>
            <Text style={styles.infoText}>Altura: {member.height}</Text>
            <Text style={styles.infoText}>Signo: {member.sign}</Text>
            <Text style={styles.infoText}>Posição: {member.position}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};




export default App;


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    background: "#121212"
  },
  capa: {
    width: "100%",
    height: 200,
    resizedMode: "cover",
    marginBottom: 20
  },
  seventeenDescription: {
    color: "#eeeeee",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 30,
    lineHeight: 20
  },
  container: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#121212"
  },
  card: {
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    marginBottom: 20,
    padding: 15,
    width: 350,
    alignItems: "center"
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff"
  },
  realName: {
    fontSize: 14,
    color: "#cccccc",
    marginBottom: 10
  },
  description: {
    fontSize: 14,
    color: "#dddddd",
    textAlign: "center",
    marginBottom: 10
  },
  infoBox: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    width: "100%"
  },
  infoText: {
    color: "#ffffff",
    fontSize: 12,
    marginBottom: 4
  }
});



