import React, {useEffect} from 'react';
import PrimaryButtonProps from './type';
import StyledButtom from './style';
const Button = (props: PrimaryButtonProps) => {
  const {
    text = '',
    variant = 'contained',
    size,
    type,
    disabled,
    loading,
    color,
    startIcon,
    endIcon,
    onClick,
    fullWidth,
    children,
  } = props;

  return (
    <button
      onClick={onClick}
      type={type}
      color={color}
      fullWidth={fullWidth}
      size={size}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? ' Loading...' : text || children}
    </button>
  );
};
export default Button;
