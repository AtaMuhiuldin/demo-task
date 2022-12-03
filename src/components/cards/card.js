import React from 'react';
import {View, Text, Dimensions, StyleSheet, ImageBackground} from 'react-native';
const SW = Dimensions.get("window").width;
const CARD_WIDTH = SW*0.95;
const Card = ({ item: { imageUrl, code, value, suit }}) => {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode="contain" source={{url: imageUrl}} style={styles.imageContainer}>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Code:</Text>
          <Text style={styles.title}>{code}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Code:</Text>
          <Text style={styles.title}>{value}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Code:</Text>
          <Text style={styles.title}>{suit}</Text>
        </View>
      </View>
    </View>
  )
}

Card.defaultProps = {
  item: {
    imageUrl: "https://deckofcardsapi.com/static/img/QC.png",
    code: "AS", 
    value: "ACE",
    suit: "SPADES"
  }
}
export default Card;


const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH, 
    borderWidth: 1,
    borderColor: "#f0f0f0",
    borderRadius: 12,
    overflow: "hidden"
  },
  imageContainer: {
    width: CARD_WIDTH,
    backgroundColor:"black",
    borderTopRightRadius: 12, 
    borderTopLeftRadius: 12,
    height: SW*0.5
  },
  contentContainer: {
    // minHeight: 50,
    width: CARD_WIDTH,
    flexDirection:"row"
  },
  titleContainer: {
    flexDirection:"row", 
    padding:10
  },
  title: {
    fontSize: 18,
    fontWeight:"bold"
  }
})