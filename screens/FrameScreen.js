import React, { useState } from "react";
import { View, TextInput, Button, ScrollView, StyleSheet, Text } from "react-native";
import Frame from "./Frame";

const FrameScreen = () => {
  const [productImage, setProductImage] = useState(require("../assets/9039033267-rolexgmtmasterii18kwhitegoldpepsi-2.png"));
  const [price, setPrice] = useState("$370");
  const [title, setTitle] = useState("GMT-Master II");
  const [subtitle, setSubtitle] = useState("The Pilot’s Watch");
  const [promoText, setPromoText] = useState("SPECIAL PROMO");
  const [promoPercentage, setPromoPercentage] = useState("30%");
  const [description, setDescription] = useState(`The Oyster Perpetual GMT-Master II is the top choice for global travelers.`);
  const [website, setWebsite] = useState("www.everywatch.com");
  const [collection, setCollection] = useState("NEW COLLECTION");

  const frameProps = {
    productImage,
    price,
    title,
    subtitle,
    promoText,
    promoPercentage,
    description,
    website,
    collection
  };

  console.log("FrameScreen rendered with props:", frameProps);

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <Frame {...frameProps} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          placeholder="Price"
          placeholderTextColor="#888"
          value={price}
          onChangeText={setPrice}
        />
        <Text style={styles.label}>Product</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#888"
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Subtitle</Text>
        <TextInput
          style={styles.input}
          placeholder="Subtitle"
          placeholderTextColor="#888"
          value={subtitle}
          onChangeText={setSubtitle}
        />
        <Text style={styles.label}>Promo Text</Text>
        <TextInput
          style={styles.input}
          placeholder="Promo Text"
          placeholderTextColor="#888"
          value={promoText}
          onChangeText={setPromoText}
        />
        <Text style={styles.label}>Promo Percentage</Text>
        <TextInput
          style={styles.input}
          placeholder="Promo Percentage"
          placeholderTextColor="#888"
          value={promoPercentage}
          onChangeText={setPromoPercentage}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Description"
          placeholderTextColor="#888"
          value={description}
          onChangeText={setDescription}
          multiline
        />
        <Text style={styles.label}>Website</Text>
        <TextInput
          style={styles.input}
          placeholder="Website"
          placeholderTextColor="#888"
          value={website}
          onChangeText={setWebsite}
        />
        <Text style={styles.label}>Collection</Text>
        <TextInput
          style={styles.input}
          placeholder="Collection"
          placeholderTextColor="#888"
          value={collection}
          onChangeText={setCollection}
        />
        <Button title="Update Frame" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff'
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#fff'
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5
  },
  textArea: {
    height: 80
  }
});

export default FrameScreen;