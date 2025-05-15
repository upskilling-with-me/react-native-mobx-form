import { DynamicForm } from "@/components/forms/DynamicForms";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from "react-native-paper";

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
		value: "India",
		displayFieldName: "Country",
		options: [
			{ label: "India", value: "India" },
			{ label: "USA", value: "USA" },
			{ label: "UK", value: "UK" },
			{ label: "Canada", value: "Canada" },
			{ label: "Australia", value: "Australia" },],
	},
];

export default function HomeScreen() {
	return (
		<View >
			<PaperProvider>
				<DynamicForm schema={schema} />
			</PaperProvider>
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
