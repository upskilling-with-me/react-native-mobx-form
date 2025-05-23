import { DynamicForm } from "@/components/forms/DynamicForms";
import { View } from 'react-native';


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
		<View>
			<DynamicForm schema={schema} />
		</View>
	);
}

