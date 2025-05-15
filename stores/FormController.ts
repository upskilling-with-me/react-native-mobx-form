import { FormElement } from "@/models/FormElement";
import { action, makeObservable, observable } from "mobx";


interface ButtonType {
	name: string;
	variant: string;
	event: (...args: any[]) => void;
	type: string;
}

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

	triggerFormEvent(button: ButtonType, ...args: any[]) {
		if (button?.type === "submit" && typeof button?.event === "function") {
			const formData = this.formElements.reduce((acc, el) => {
				acc[el.name] = el.value;
				return acc;
			}, {} as Record<string, any>);

			button?.event(formData, ...args);
		} else if (typeof button?.event === "function") {
			button?.event(...args);
		}
	}
}