import { FormElement } from "@/models/FormElement";
import { action, makeObservable, observable } from "mobx";


interface ButtonType {
	name: string;
	variant: string;
	event: string;
	type: string;
}

export class FormController {
	formConfig: any;
	formElements: FormElement[] = [];
	eventHandlers: Record<string, Function>;

	constructor(schema: any, eventHandlers: Record<string, Function>) {
		this.eventHandlers = eventHandlers;
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
		if (button?.type === "submit" && typeof this.eventHandlers[button?.event] === "function") {
			const formData = this.formElements.reduce((acc, el) => {
				acc[el.name] = el.value;
				return acc;
			}, {} as Record<string, any>);
			this.eventHandlers[button?.event](formData, ...args); // handleSubmit(formData)
		} else if (typeof this.eventHandlers[button?.event] === "function") {
			this.eventHandlers[button?.event](...args); // handleCancel()
		}
	}
}