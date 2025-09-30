import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const styles = createHomeStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Change the theme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
