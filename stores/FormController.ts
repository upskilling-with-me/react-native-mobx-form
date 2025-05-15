import { FormElement } from "@/models/FormElement";
import { action, makeObservable, observable } from "mobx";


export class FormController {
	formElements: FormElement[] = [];

	constructor(formElements: FormElement[]) {
		this.formElements = formElements;

		makeObservable(this, {
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