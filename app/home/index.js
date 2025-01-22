import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { SearchBar } from "react-native-screens";
import { TextInput } from "react-native-web";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backGround: "red",
  },
});

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <TextInput placeholder="Search" />
        </View>
        <Text>We are comming soon ...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
