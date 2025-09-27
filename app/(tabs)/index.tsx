import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.cont}>
      <Text style={styles.txt}>This is Padam Gadshila</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Change the theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "blue",
    color: "#fff",
    borderRadius: 10,
  },
});
