import 'react-native-reanimated';

import { DynamicForm } from '@/components/forms/DynamicForms';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
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


	return (
		<PaperProvider>
			<DynamicForm schema={schema} />
		</PaperProvider>
	);
}
