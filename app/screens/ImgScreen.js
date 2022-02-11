import { StyleSheet, View, Image } from "react-native";
import React from "react";
import colors from "../../config/colors";

export default function ImgScreen({ image }) {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.black,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
