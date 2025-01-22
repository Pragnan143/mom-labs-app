import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
const Otp = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headding}>Verify Otp</Text>
        <View style={styles.otpWrapper}>
          <TextInput
            placeholder="X"
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="X"
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="X"
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="X"
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>
        <Text styles={styles.supportText}>
          Didn't get otp? <Text style={{ color: "teal" }}>Resend otp</Text>{" "}
        </Text>
        <View>
          <Pressable onPress={() => {}} style={styles.button}>
            <Link href="/home">
              <Text style={styles.buttonText}>Submit</Text>
            </Link>
          </Pressable>
        </View>
      </View>
      {/* <View>
        <Text style={styles.headding}>
          mom{" "}
          <Text style={{ color: "teal", backgroundColor: "#fff" }}>labs</Text>
        </Text>
      </View> */}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: 10,
  },
  headding: {
    fontSize: 28,
    color: "teal",
    textAlign: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  otpWrapper: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    gap: 12,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "teal",
    textAlign: "center",
    padding: 6,
    borderRadius: 5,
    fontSize: 18,
  },
  supportText: {
    alignContent: "right",
  },
  button: {
    marginTop: 20,
    outLineWidth: 1,
    backgroundColor: "teal",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "semibold",
  },
});

export default Otp;
