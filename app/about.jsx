import React from "react";
import { Text, View } from "react-native";

export default function about() {
  return (
    <View
      style={{ height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ fontWeight: "bold" }}>About Us</Text>
    </View>
  );
}
