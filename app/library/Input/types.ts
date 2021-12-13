import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputContentSizeChangeEventData,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
} from "react-native";

export type tInputMode = "outlined" | "flat" | "with-label";
export interface IInputProps extends TextInputProps {
  title: string;
  mode: tInputMode;
  errors?: string[];
  clearButton?: boolean;
  limit?: number;
}

export interface IInputStyleGen {
  mode: tInputMode;
  focused: boolean;
  value: string | undefined;
  multiline: boolean | undefined;
  numberOfLines: number | undefined;
  inputHeightState: number;
  hasError: boolean;
  clearButton: boolean | undefined;
  limit: number | undefined;
  style: StyleProp<TextStyle>;
}

export type tOnContentSize =
  NativeSyntheticEvent<TextInputContentSizeChangeEventData>;
export type tNativeEvent = NativeSyntheticEvent<TextInputFocusEventData>;
