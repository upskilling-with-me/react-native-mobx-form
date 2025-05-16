import { makeObservable, observable } from "mobx";

export type FormElementType =
    | "text"
    | "dropdown"
    | "checkbox"
    | "radio";

export class FormElement {
    id: string;
    name: string;
    type: FormElementType;
    displayFieldName: string;
    value: any;
    config?: {
        options?: any[];
        isMultiSelect?: boolean;
        placeholder?: string;
    }

    constructor(id: string, name: string, type: FormElementType, displayFieldName: string, value: any, config?: any) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.displayFieldName = displayFieldName;
        this.value = value;
        this.config = config || {};

        makeObservable(this, {
            id: observable,
            name: observable,
            type: observable,
            displayFieldName: observable,
            value: observable,
            config: observable,
        });
    }
}