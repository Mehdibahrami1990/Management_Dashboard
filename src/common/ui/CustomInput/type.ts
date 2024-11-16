type inputModeType = 'tel' | 'numeric' | 'text' | undefined;
type variantType = 'outlined' | 'filled' | 'standard';
export type typeTextField = 'text' | 'password' | 'email' | 'numeric';
export default interface Iinput {
  label?: string;
  placeholder?: string;
  value?: any;
  error?: boolean;
  variant?: variantType;
  maxLength?: number;
  helperText?: string;
  type?: typeTextField;
  inputMode?: inputModeType;
  InputProps?: any;
  disabled?: boolean;
  name:string,
  className:string,
  onChangeHandler?: (value: any) => void;
  validationState?: any;
  }
  