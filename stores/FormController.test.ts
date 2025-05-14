import { FormController } from "./FormController";

describe("FormController", () => {
	const mockSchema = {
		fields: [
			{ name: "firstName", type: "text" as const },
			{ name: "age", type: "text" as const },
			{ name: "country", type: "dropdown" as const },
		],
	};

	it("initializes field values, options, and loading states", () => {
		const controller = new FormController(mockSchema);

		expect(controller.values).toEqual({
			firstName: null,
			age: null,
			country: null,
		});

		expect(controller.options).toEqual({
			firstName: [],
			age: [],
			country: [],
		});

		expect(controller.loading).toEqual({
			firstName: false,
			age: false,
			country: false,
		});
	});

	it("stores the schema correctly", () => {
		const controller = new FormController(mockSchema);
		expect(controller.schema).toStrictEqual(mockSchema);
	});
});
