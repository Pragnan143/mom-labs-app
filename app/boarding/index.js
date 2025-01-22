import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import Boarding from "../../assets/boarding.png";
export default function BoardingPage() {
  return (
    <SafeAreaView style={styles.strictContainer}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.headding}>
            mom{" "}
            <Text style={{ color: "teal", backgroundColor: "#fff" }}>labs</Text>
          </Text>
          <View>
            <Image
              source={Boarding}
              style={{ width: 380, height: 400, alignSelf: "center" }}
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <TextInput
            maxLength={13}
            placeholder="+91 xxxxxxxxxx"
            defaultValue="+91"
            keyboardType="numeric"
            style={styles.input}
          />

          <View>
            <Pressable onPress={() => {}} style={styles.button}>
              <Link href="/otp">
                <Text style={styles.buttonText}>Get otp</Text>
              </Link>
            </Pressable>
          </View>

          <Link
            href="/home"
            style={{
              color: "teal",
              textAlign: "center",
              // margin: 10,
              fontSize: 16,
            }}
          >
            Skip
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  strictContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    color: "red",
    paddingTop: 28,
    justifyContent: "center",
    backgroundColor: "teal",
    opacity: 0.9,
  },
  top: {
    flex: 3,
    textAlign: "center",
    padding: 10,
    alignItems: "center",
  },
  headding: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
  bottom: {
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: "#fff",
    fontSize: 24,
    textAlign: "center",
    justifyContent: "space-around",
    gap: 10,
    padding: 10,
  },
  input: {
    fontSize: 24,
    padding: 10,
    paddingHorizontal: 16,
    margin: 10,
    borderWidth: 1,
    borderColor: "teal",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "teal",
    paddingHorizontal: 20,
    paddingVertical: 15,
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
