import { makeAutoObservable } from "mobx";

export type FieldType =
	| "text"
	| "dropdown"
	| "multiselect"
	| "checkbox"
	| "radio";

interface FormFieldSchema {
	name: string;
	type: FieldType;
	loadOnDemand?: () => Promise<any[]>;
	displayFieldName?: string;
	multiple?: boolean;
	onUpdateValue?: (value: any, controller: FormController) => void;
}

interface FormSchema {
	fields: FormFieldSchema[];
	events?: {
		submitForm?: (
			values: Record<string, any>,
			controller: FormController,
		) => void;
	};
}

export class FormController {
	schema: FormSchema;
	values: Record<string, any> = {};
	options: Record<string, any[]> = {};
	loading: Record<string, boolean> = {};

	constructor(schema: FormSchema) {
		this.schema = schema;
		makeAutoObservable(this);
		this.initialize();
	}

	private initialize() {
		for (const field of this.schema.fields) {
			this.values[field.name] = null;
			this.options[field.name] = [];
			this.loading[field.name] = false;
		}
	}
}
