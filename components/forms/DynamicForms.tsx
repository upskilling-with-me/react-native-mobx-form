import { FormController } from '@/stores/FormController';
import { observer } from 'mobx-react-lite';
import { StyleSheet, View } from "react-native";
import { TextInput } from 'react-native-paper';

let controller: FormController | null = null;

export const DynamicForm = observer(({ schema }: any) => {
    if (!controller) {
        controller = new FormController(schema);
    }

    return (
        <View style={styles.container}>
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
                            />
                        );
                    default:
                        return null;
                }
            })}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 16,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#fff",
        gap: 12, // this works only in React Native >= 0.71
    },
    input: {
        flexBasis: "100%",
        marginBottom: 12,
    },
});
