import { forwardRef, useRef, useEffect } from 'react';
import { mergeRefs } from 'react-merge-refs';
import {
  TextArea as AriaTextArea,
  TextField,
  Label,
} from 'react-aria-components';

import { cx } from '~styled-system/css';
import {
  inputWrapperStyles,
  labelStyles,
  inputBaseStyles,
  DescriptionText,
  ErrorText,
} from '../partials/common';
import { TextAreaProps } from './TextArea.types';

// Ref: https://react-spectrum.adobe.com/react-aria/TextField.html#textarea

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id,
      label,
      description,
      errorMessage,
      placeholder,
      autoResize = false,
      rows,
      className,
      isRequired,
      ...props
    },
    ref
  ) => {
    const innerRef = useRef<HTMLTextAreaElement>(null);

    const resizeTextArea = () => {
      if (innerRef.current && autoResize) {
        innerRef.current.style.height = 'auto';
        innerRef.current.style.height = innerRef.current.scrollHeight + 'px';
      }
    };

    // Resize the textarea on mount if autoResize is enabled
    useEffect(() => {
      if (autoResize) {
        resizeTextArea();
      }
    });

    return (
      <TextField
        {...props}
        className={cx(inputWrapperStyles, className)}
        isInvalid={!!errorMessage}
      >
        <Label className={labelStyles} data-required={isRequired}>
          {label}
        </Label>

        <AriaTextArea
          id={id}
          rows={rows}
          ref={mergeRefs([innerRef, ref])}
          placeholder={placeholder}
          className={inputBaseStyles}
          onChange={resizeTextArea}
        />

        {description && <DescriptionText>{description}</DescriptionText>}
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </TextField>
    );
  }
);

TextArea.displayName = 'TextArea';
