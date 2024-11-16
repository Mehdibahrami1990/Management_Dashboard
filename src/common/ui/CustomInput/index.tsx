import {useRef, useState} from 'react';
import Iinput from './type';
const Input = (props: Iinput) => {
  const {
    label = '',
    variant = 'outlined',
    placeholder = '',
    value,
    error = false,
    helperText = '',
    type = 'text',
    maxLength = 100,
    inputMode,
    disabled,
    name,
    className,
    onChangeHandler,
  } = props;
  const onChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = event.target.value;
    onChangeHandler?.(value);
  };
  return (
    <>
      <input
        id="outlined-basic"
        variant={variant}
        placeholder={placeholder}
        fullWidth
        label={label}
        value={value}
        error={error}
        onChange={onChange}
        helperText={helperText}
        type={type}
        inputMode={inputMode}
        autoComplete="off"
        disabled={disabled}
        inputProps={{
          maxLength: maxLength,
          autoComplete: 'new-password',
          form: {
            autocomplete: 'off',
          },
        }}
        {...props}
      />
      <span>{helperText}</span>
    </>
  );
};
export default Input;
