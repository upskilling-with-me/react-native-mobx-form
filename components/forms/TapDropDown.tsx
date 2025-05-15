import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-paper-dropdown';

interface TapDropdownProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
  error?: string;
}

export const TapDropdown = ({ label, value, options, onSelect, error }: TapDropdownProps) => {
  return (
    <View style={styles.dropdownWrapper}>
      <View style={styles.labelWrapper}>
        <Text style={styles.customLabel}>{label}</Text>
      </View>
      <Dropdown
        mode="outlined"
        value={value}
        onSelect={(selectedValue?: string) => {
          if (selectedValue) {
            onSelect(selectedValue);
          }
        }}
        options={options}
        hideMenuHeader
        menuContentStyle={styles.menuContent}
        CustomDropdownInput={({ label }) => (
          <View style={styles.defaultDropdownInputWrapper}>
            <Text style={styles.truncatedText} numberOfLines={1} ellipsizeMode="tail">
              {options.find((option) => option.value === value)?.label || label}
            </Text>
          </View>
        )}
        CustomDropdownItem={({ option, toggleMenu, onSelect }) => (
          <TouchableOpacity
            style={styles.touchableItem}
            onPress={() => {
              onSelect?.(option.value);
              toggleMenu();
            }}
          >
            <Text style={styles.truncatedText} numberOfLines={1} ellipsizeMode="tail">
              {option.label}
            </Text>
          </TouchableOpacity>
        )}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    marginBottom: 10,
  },
  labelWrapper: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    zIndex: 1,
  },
  customLabel: {
    fontSize: 12,
    color: '#666',
  },
  defaultDropdownInputWrapper: {
    position: 'relative',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  truncatedText: {
    fontSize: 16,
    color: 'black',
  },
  touchableItem: {
    padding: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  menuContent: {
    marginTop: 32,
    backgroundColor: '#fff',
  },
});