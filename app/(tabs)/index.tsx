import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<Text>React native Mobx Form</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#fff",
	},
});
