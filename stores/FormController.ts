import { FormElement } from "@/models/FormElement";
import { action, makeObservable, observable } from "mobx";


export class FormController {
	formConfig: any;
	formElements: FormElement[] = [];



	constructor(schema: any) {
		this.formConfig = schema.formConfig;
		this.formElements = schema.formElements;

		makeObservable(this, {
			formConfig: observable,
			formElements: observable,
			updateFormElementValue: action,
		});
	}

	updateFormElementValue(id: string, value: any) {
		const formElement = this.formElements.find(formElement => formElement.id === id);

		if (formElement) {
			formElement.value = value;
		}
	}

	getFormElementValue(id: string) {
		const formElement = this.formElements.find(formElement => formElement.id === id);
		return formElement ? formElement.value : null;
	}
}