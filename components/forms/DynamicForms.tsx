import { FormController } from '@/stores/FormController';
import { observer } from 'mobx-react-lite';
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import { MultiSelectDropdown } from 'react-native-paper-dropdown';
import { TapDropdown } from './TapDropDown';

let controller: FormController | null = null;

export const DynamicForm = observer(({ schema }: any) => {
    if (!controller) {
        controller = new FormController(schema);
    }

    return (
        <View style={styles.container}>
            <View style={styles.formElementsContainer}>
                {controller.formElements.map((formElement) => {
                    switch (formElement.type) {
                        case "text":
                            return (
                                <TextInput
                                    key={formElement.id}
                                    mode="outlined"
                                    style={styles.input}
                                    value={formElement.value}
                                    onChangeText={(text) => controller?.updateFormElementValue(formElement.id, text)}
                                    placeholder={formElement.config?.placeholder}
                                />
                            );

                        case "dropdown":
                            if(formElement.config?.isMultiSelect) {
                                return (
                                    <View style={{ flexBasis: "100%" }} key={formElement.id}>
                                        <MultiSelectDropdown
                                            label={formElement.name}
                                            value={formElement.value}
                                            onSelect={(value) => controller?.updateFormElementValue(formElement.id, value)}
                                            options={formElement.config?.options ?? []}
                                            mode='outlined'
                                            menuContentStyle={{ width: "100%" }}
                                            placeholder={formElement.config?.placeholder}
                                        />
                                    </View>
                                )
                            } else {
                            return (
                                <TapDropdown
                                    key={formElement.id}
                                    label={formElement.name}
                                    value={formElement.value}
                                    options={formElement.config?.options ?? []}
                                    onSelect={(value) => controller?.updateFormElementValue(formElement.id, value)}
                                    placeholder={formElement.config?.placeholder}
                                />
                            );
                        }
                        default:
                            return null;
                    }
                })}
            </View>
            <View style={styles.btncontainer}>
                {controller.formConfig.buttons.map((button: any) => (
                    <Button
                        key={button.name}
                        mode={button.variant}
                        onPress={() => controller?.triggerFormEvent(button)}
                        style={styles.btn}
                    >
                        {button.name}
                    </Button>
                ))}
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
    },
    formElementsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        width: "100%",
    },
    input: {
        flexBasis: "100%",
        marginBottom: 12,
    },
    btncontainer: {
        flexDirection: "row",
        gap: 12,
        marginTop: 12,
        justifyContent: "space-between",
        width: "100%",
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    btn: {
        flex: 1,
        marginBottom: 12,
    }
});
