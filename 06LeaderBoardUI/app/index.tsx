import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {topLeaders.map((item, index) => {

            return (
              <View key={index} style={[styles.mainCard, item.id !== 2 && { marginTop: 20 }]}>
                <Image source={{ uri: item.image }} style={styles.mainCardImage} />
                <Text style={styles.mainCardTitle}>{item.name}</Text>
                <View style={styles.mainCardRankContainer}>
                  <Text style={styles.mainCardRankContainerText}>{item.rank}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </View>
      <FlatList
        data={listdata}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <View style={styles.cardDataContainer}>
                <Text style={styles.cardDataIndex}>{index + 1}</Text>
                <Image source={{ uri: item.image }} style={styles.cardDataImage} resizeMode="cover" />
                <Text style={styles.cardDataTitle}>{item.name}</Text>
              </View>
              <View style={styles.cardRankContainer}>
                <Text style={styles.cardRankTitle}>{item.rank}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272C35",
  },
  topContainer: {
    backgroundColor: "#1A1F25",
    paddingTop: 30,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
    paddingBottom: 50,

  },
  headerTitle: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 21,
    fontWeight: "bold",
  },
  mainCardContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  mainCard: {
    backgroundColor: "#272C35",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    gap: 15,
    height: 170,
  },
  mainCardImage: {
    width: 70,
    height: 80,
    borderRadius: 10,
  },
  mainCardTitle: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },
  mainCardRankContainer: {
    backgroundColor: "#FFA500",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: -15,
  },
  mainCardRankContainerText: {
    color: "#ffffff",
  },
  card: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardDataIndex: {
    color: "#ffffff",
  },
  cardDataImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  cardDataTitle: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 17,
  },
  cardRankContainer: {},
  cardRankTitle: {
    color: "#FFA500",
  },
})

export default Index;

const topLeaders = [
  {
    "id": 1,
    "name": "Abhishek",
    "image": "https://i.pravatar.cc/200?img=11",
    "rank": 1
  },
  {
    "id": 2,
    "name": "Priya",
    "image": "https://i.pravatar.cc/200?img=45",
    "rank": 2
  },
  {
    "id": 3,
    "name": "Rahul",
    "image": "https://i.pravatar.cc/200?img=12",
    "rank": 3
  }
];

const listdata = [
  {
    "id": 1,
    "name": "Amit",
    "image": "https://i.pravatar.cc/200?img=13",
    "rank": 923887
  },
  {
    "id": 2,
    "name": "Sneha",
    "image": "https://i.pravatar.cc/200?img=47",
    "rank": 23568
  },
  {
    "id": 3,
    "name": "Vikram",
    "image": "https://i.pravatar.cc/200?img=14",
    "rank": 74213
  },
  {
    "id": 4,
    "name": "Simran",
    "image": "https://i.pravatar.cc/200?img=48",
    "rank": 65792
  },
  {
    "id": 5,
    "name": "Karan",
    "image": "https://i.pravatar.cc/200?img=15",
    "rank": 84932
  },
  {
    "id": 6,
    "name": "Neha",
    "image": "https://i.pravatar.cc/200?img=49",
    "rank": 12938
  },
  {
    "id": 7,
    "name": "Rohan",
    "image": "https://i.pravatar.cc/200?img=16",
    "rank": 56324
  },
  {
    "id": 8,
    "name": "Meera",
    "image": "https://i.pravatar.cc/200?img=50",
    "rank": 93821
  },
  {
    "id": 9,
    "name": "Arjun",
    "image": "https://i.pravatar.cc/200?img=17",
    "rank": 45287
  },
  {
    "id": 10,
    "name": "Divya",
    "image": "https://i.pravatar.cc/200?img=51",
    "rank": 76549
  },
  {
    "id": 11,
    "name": "Ravi",
    "image": "https://i.pravatar.cc/200?img=18",
    "rank": 83412
  },
  {
    "id": 12,
    "name": "Anjali",
    "image": "https://i.pravatar.cc/200?img=52",
    "rank": 39284
  },
  {
    "id": 13,
    "name": "Manoj",
    "image": "https://i.pravatar.cc/200?img=19",
    "rank": 59482
  },
  {
    "id": 14,
    "name": "Pooja",
    "image": "https://i.pravatar.cc/200?img=53",
    "rank": 71294
  },
  {
    "id": 15,
    "name": "Suresh",
    "image": "https://i.pravatar.cc/200?img=20",
    "rank": 98124
  },
  {
    "id": 16,
    "name": "Kavita",
    "image": "https://i.pravatar.cc/200?img=54",
    "rank": 26578
  },
  {
    "id": 17,
    "name": "Rajat",
    "image": "https://i.pravatar.cc/200?img=21",
    "rank": 74125
  },
  {
    "id": 18,
    "name": "Asha",
    "image": "https://i.pravatar.cc/200?img=55",
    "rank": 52389
  },
  {
    "id": 19,
    "name": "Ishan",
    "image": "https://i.pravatar.cc/200?img=22",
    "rank": 41932
  },
  {
    "id": 20,
    "name": "Ritika",
    "image": "https://i.pravatar.cc/200?img=56",
    "rank": 63124
  }
];
