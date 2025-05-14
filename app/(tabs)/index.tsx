import { DynamicForm } from "@/components/forms/DynamicForms";
import { StyleSheet, View } from "react-native";

const schema = [
	{
		id: '1',
		name: "name",
		type: "text",
		value: "enter your name",
		placeholder: "enter your name",
		displayFieldName: "Name",
	},
	{
		id: '2',
		name: "country",
		type: "dropdown",
		value: "select your country",
		displayFieldName: "Country",
	},
];

export default function HomeScreen() {
	return (
		<View >
			<DynamicForm schema={schema} />
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
