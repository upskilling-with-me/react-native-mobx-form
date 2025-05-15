import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-paper-dropdown';
import styled from 'styled-components/native';

interface TapDropdownProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
  error?: string;
}

export const TapDropdown = ({ label, value, options, onSelect, error }: TapDropdownProps) => {
  return (
    <DropdownWrapper>
      <LabelWrapper>
        <CustomLabel>{label}</CustomLabel>
      </LabelWrapper>
      <Dropdown
        mode='outlined'
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
          <DefaultDropdownInputWrapper>
            <TruncatedText numberOfLines={1} ellipsizeMode='tail'>
              {options.find((option) => option.value === value)?.label || label}
            </TruncatedText>
          </DefaultDropdownInputWrapper>
        )}
        CustomDropdownItem={({ option, toggleMenu, onSelect }) => (
          <TouchableItem
            onPress={() => {
              onSelect?.(option.value);
              toggleMenu();
            }}
          >
            <TruncatedText numberOfLines={1} ellipsizeMode='tail'>
              {option.label}
            </TruncatedText>
          </TouchableItem>
        )}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </DropdownWrapper>
  );
};

const styles = StyleSheet.create({
  menuContent: {
    marginTop: 32,
    backgroundColor: '#fff',
  },
});

const DropdownWrapper = styled.View`
  margin-bottom: 10px;
`;

const LabelWrapper = styled.View`
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: white;
  padding: 0 5px;
  z-index: 1;
`;

const CustomLabel = styled(Text)`
  font-size: 12px;
  color: #666;
`;

const DefaultDropdownInputWrapper = styled.View`
  position: relative;
  margin-bottom: 20px;
  border-width: 1px;
  border-color: #ccc;
  paddingHorizontal: 10px;
  paddingVertical: 16px;
  background-color: #fff;
`;

const TruncatedText = styled(Text)`
  font-size: 16px;
  color: black;
`;

const TouchableItem = styled.TouchableOpacity`
  padding: 10px;
`;

const ErrorText = styled(Text)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
