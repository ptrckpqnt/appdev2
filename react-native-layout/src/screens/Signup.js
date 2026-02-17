import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Signup() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>

        <View style={styles.inputContainer}>
            <Ionicons
            name="person-outline"
            size={20}
            color="#666"
            style={styles.icon}
            />
            <TextInput placeholder="Username" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
            <Ionicons
            name="mail-outline"
            size={20}
            color="#666"
            style={styles.icon}
            />
            <TextInput placeholder="Enter email address" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
            <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={styles.icon}
            />
            <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
            />
        </View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    },
    title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    },
    inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: "100%",
    height: 50,
    },
    icon: {
    marginRight: 10,
    },
    input: {
    flex: 1,
    },
    button: {
    backgroundColor: "#28a745", 
    padding: 15,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    },
    buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    },
    footerText: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",

    },

    loginText: {
    color: "#2c77e9",
    fontWeight: "bold",
    },
});