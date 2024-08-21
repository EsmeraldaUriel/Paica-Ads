import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const Frame = ({ productImage, price, title, subtitle, promoText, promoPercentage, description, website, collection }) => {
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Image
          style={[styles.icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/2-2.png")}
        />
        <Image
          style={[styles.icon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/3-2.png")}
        />
        <Image
          style={styles.logo}
          contentFit="cover"
          source={require("../assets/logo.png")} // Replace with your logo path
        />
        <View style={styles.priceContainer}>
          <Text style={[styles.only, styles.onlyTypo]}>Only</Text>
          <Text style={[styles.only, styles.onlyTypo]}>{price}</Text>
        </View>
        <Image
          style={styles.rolexGmtMasterIi18kWhiteIcon}
          contentFit="cover"
          source={productImage}
        />
        <View style={[styles.gmtMasterIiParent, styles.parentFlexBox]}>
          <Text style={[styles.gmtMasterIi, styles.gmtMasterIiTypo]}>
            {title}
          </Text>
          <Text style={[styles.thePilotsWatch, styles.onlyClr]}>
            {subtitle}
          </Text>
        </View>
        <View style={[styles.specialPromoParent, styles.parentFlexBox]}>
          <Text style={[styles.specialPromo, styles.specialPromoTypo]}>
            {promoText}
          </Text>
          <Text style={[styles.text, styles.onlyTypo]}>{promoPercentage}</Text>
        </View>
        <Text
          style={[styles.theOysterPerpetual, styles.gmtMasterIiTypo]}
        >{description}</Text>
        <Text style={[styles.wwweverywatchcom, styles.specialPromoTypo]}>
          {website}
        </Text>
        <Text style={[styles.newCollection, styles.specialPromoTypo]}>
          {collection}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    marginTop: 100,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  iconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 225,
  },
  onlyTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.jetBrainsMonoExtraBold,
    fontWeight: "800",
  },
  parentFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  gmtMasterIiTypo: {
    fontFamily: FontFamily.inriaSerifBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorWhite,
  },
  onlyClr: {
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
  },
  specialPromoTypo: {
    fontFamily: FontFamily.jetBrainsMonoBold,
    fontWeight: "700",
    color: Color.colorWhite,
  },
  icon: {
    width: 400,
  },
  icon1: {
    width: 399,
  },
  logo: {
    width: 70, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    position: "absolute",
    top: 0, // Adjust the top position as needed
    left: 253, // Adjust the left position as needed
  },
  priceContainer: {
    position: "absolute",
    left: 154,
    top: 171,
    alignItems: "center",
  },
  only: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_3xs,
  },
  rolexGmtMasterIi18kWhiteIcon: {
    top: 74,
    left: 51,
    width: 89,
    height: 148,
    position: "absolute",
  },
  gmtMasterIi: {
    fontSize: 16,
    textAlign: "center",
    alignSelf: "stretch",
  },
  thePilotsWatch: {
    fontWeight: "300",
    fontFamily: FontFamily.inriaSerifLight,
    height: 61,
    textAlign: "center",
    alignSelf: "stretch",
  },
  gmtMasterIiParent: {
    top: 70,
    left: 229,
    width: 116,
    height: 33,
  },
  specialPromo: {
    width: 87,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.jetBrainsMonoBold,
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    color: "#a89565",
    height: 45,
    textAlign: "center",
    alignSelf: "stretch",
  },
  specialPromoParent: {
    top: 113,
    left: 237,
    width: 100,
  },
  theOysterPerpetual: {
    left: 194,
    fontSize: 5.5,
    textAlign: "center",
    top: 169,
    position: "absolute",
  },
  wwweverywatchcom: {
    top: 213,
    left: 249,
    width: 76,
    height: 9,
    fontSize: FontSize.size_6xs,
    fontFamily: FontFamily.jetBrainsMonoBold,
    textAlign: "left",
    position: "absolute",
  },
  newCollection: {
    top: 53,
    left: 246,
    fontSize: 9,
    width: 84,
    textAlign: "center",
    position: "absolute",
  },
  parent: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 225,
  },
});

export default Frame;