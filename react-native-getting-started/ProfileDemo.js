import { View, Text, StyleSheet } from "react-native";

const ProfileDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Demo</Text>

      <View style={styles.card}>
        <Text style={styles.text}>Course & Section: BSIS 3-A</Text>
        <Text style={styles.text}>Name: Patrick Pioquinto</Text>
        <Text style={styles.text}>Age: 22</Text>
        <Text style={styles.text}>Favorite Hobby: Playing Volleyball and Watching K-Dramas</Text>

        <Text style={styles.subTitle}>Pet Peeves in Class:</Text>
        <Text style={styles.text}>• Demanding for help and sometimes even want others to do it for them without actually trying it first! Na para bang...heh! bahala ka dyan!</Text>
        <Text style={styles.text}>• Someone who acts like they do all the things but doesn’t really contribute to the team. Kala mo naman talaga e!</Text>
        <Text style={styles.text}>• Someone who argues confidently about something they don’t actually understand and refuses to admit they might be wrong. Huwag mo ko kausapin please lang! </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0fdff",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#919ee9",
    padding: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
});

export default ProfileDemo;
