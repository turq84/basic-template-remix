import { useState, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, Input, Label } from 'react-aria-components';

import { cx } from '~styled-system/css';
import {
  inputWrapperStyles,
  inputIconLeftStyles,
  labelStyles,
  inputBaseStyles,
  DescriptionText,
  ErrorText,
} from '../partials/common';
import { Icon } from '../Icon';
import { PasswordToggleButton, InputContent } from './TextInput.styles';
import type { TextInputProps } from './TextInput.types';

/**
 * Reference: https://react-spectrum.adobe.com/react-aria/TextField.html
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      icon,
      description,
      errorMessage,
      placeholder,
      id,
      className,
      isRequired,
      type,
      ...props
    },
    ref
  ) => {
    const { t } = useTranslation();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const isPassword = type === 'password';

    return (
      <TextField
        {...props}
        className={cx(inputWrapperStyles, className)}
        isInvalid={!!errorMessage}
      >
        <Label className={labelStyles} data-required={isRequired}>
          {label}
        </Label>

        <InputContent>
          {icon && (
            <Icon
              className={inputIconLeftStyles}
              name={icon}
              size={20}
              color='neutral1'
            />
          )}

          <Input
            ref={ref}
            id={id}
            placeholder={placeholder}
            className={inputBaseStyles}
            data-password={isPassword || undefined}
            type={isPassword ? (passwordVisible ? 'text' : 'password') : type}
          />

          {isPassword && (
            <PasswordToggleButton
              isSelected={passwordVisible}
              onChange={setPasswordVisible}
              aria-label={t('form.showPassword')}
            >
              <Icon
                name={passwordVisible ? 'eye' : 'eyeOff'}
                size={20}
                color='neutral1'
              />
            </PasswordToggleButton>
          )}
        </InputContent>

        {description && <DescriptionText>{description}</DescriptionText>}
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </TextField>
    );
  }
);

TextInput.displayName = 'TextInput';
