import 'react-native-reanimated';

import { DynamicForm } from '@/components/forms/DynamicForms';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
	const schema = {
		formConfig: {
			buttons: [
				{ name: "Reset", variant: "text", event: "handleReset", type: 'reset' },
				{ name: "Cancel", variant: "outlined", event: "handleCancel", type: 'cancel' },
				{ name: "Submit", variant: "contained", event: "handleSubmit", type: 'submit' }
			]
		},
		formElements: [
			{
				id: '1',
				name: "name",
				type: "text",
				value: "",
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
		]
	};

	const eventHandlers = {
		handleCancel: () => console.log("Cancel button clicked!"),
		handleSubmit: (formData: any) => console.log("Submit button clicked!", formData),
		handleReset: () => console.log("Reset button clicked!"),
	};


	return (
		<PaperProvider>
			<DynamicForm schema={schema} eventHandlers={eventHandlers} />
		</PaperProvider>
	);
}
