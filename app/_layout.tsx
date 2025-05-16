import 'react-native-reanimated';

import { DynamicForm } from '@/components/forms/DynamicForms';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
	const schema = {
		formConfig: {
			buttons: [
				{
					name: "Reset",
					variant: "text",
					type: "reset",
					event: () => console.log("Reset button clicked!"),
				},
				{
					name: "Cancel",
					variant: "outlined",
					type: "cancel",
					event: () => console.log("Cancel button clicked!"),
				},
				{
					name: "Submit",
					variant: "contained",
					type: "submit",
					event: (formData: any) =>
						console.log("Submit button clicked!", formData),
				},
			],
		},
		formElements: [
			{
				id: "1",
				name: "name",
				type: "text",
				value: "",
				displayFieldName: "Name",
				config: {
					placeholder: "Enter your name",
				}
			},
			{
				id: "2",
				name: "country",
				type: "dropdown",
				value: "",
				displayFieldName: "Country",
				config: {
					placeholder: "Select your country",
					options: [
						{ label: "India", value: "India" },
						{ label: "USA", value: "USA" },
						{ label: "UK", value: "UK" },
						{ label: "Canada", value: "Canada" },
						{ label: "Australia", value: "Australia" },
					],
				}
			},
			{
				id: "3",
				name: "country-multiselect",
				type: "dropdown",
				value: [],
				displayFieldName: "{name}({identifier})",
				config: {
					placeholder: "Select countries",
					options: [
						{ label: "India", value: "India" },
						{ label: "USA", value: "USA" },
						{ label: "UK", value: "UK" },
						{ label: "Canada", value: "Canada" },
						{ label: "Australia", value: "Australia" },
					],
					isMultiSelect: true,
				}
			},
		],
	};


	return (
		<PaperProvider>
			<DynamicForm schema={schema} />
		</PaperProvider>
	);
}
