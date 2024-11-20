import { ComponentProps, ReactElement, ReactNode, useContext } from 'react';
import {
  ModalOverlay as AriaModalOverlay,
  Modal as AriaModal,
  OverlayTriggerStateContext,
  Heading,
} from 'react-aria-components';
import { useTranslation } from 'react-i18next';

import { Text } from '../Text';
import { IconButton } from '../IconButton';
import {
  dialogOverlayStyles,
  dialogModalStyles,
  DialogContainer,
  DialogHeaderContainer,
  DialogBodyContainer,
  DialogFooterContainer,
} from './Dialog.styles';
import './styles.css';

const DialogBase = ({
  children,
  isOpen,
  placement = 'middle',
  isDismissable = true,
  onOpenChange,
}: {
  children: ReactNode;
  isOpen: boolean;
  /**
   * Allows closing the dialog by clicking on the overlay or pressing ESC.
   * Defaults to `true`.
   */
  isDismissable?: boolean;
  /**
   * Where the dialog should be placed.
   * Defaults to `middle`.
   */
  placement?: 'top' | 'middle' | 'bottom' | 'drawer';
  onOpenChange: (isOpen: boolean) => void;
}) => {
  return (
    <AriaModalOverlay
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={!isDismissable}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      data-testid='dialog-overlay'
      className={({ isEntering, isExiting }) =>
        dialogOverlayStyles({ isEntering, isExiting })
      }
    >
      <AriaModal
        data-testid='dialog-container'
        className={({ isEntering, isExiting }) =>
          dialogModalStyles({ placement, isEntering, isExiting })
        }
      >
        <DialogContainer>{children}</DialogContainer>
      </AriaModal>
    </AriaModalOverlay>
  );
};

const DialogHeader = ({
  title,
  children,
  ...rest
}: ComponentProps<typeof DialogHeaderContainer> & {
  title?: string;
  children?: ReactElement;
}) => {
  const { t } = useTranslation();
  const { close } = useContext(OverlayTriggerStateContext);

  if (!title && !children) {
    throw new Error(
      'DialogHeader requires either a `title` string or `children` element!'
    );
  }

  return (
    <DialogHeaderContainer data-testid='dialog-header' {...rest}>
      <Heading slot='title'>
        {title ? (
          <Text variant='headingM' as='span'>
            {title}
          </Text>
        ) : (
          children
        )}
      </Heading>
      <IconButton label={t('close')} icon='close' size={32} onPress={close} />
    </DialogHeaderContainer>
  );
};

const DialogBody = (props: ComponentProps<typeof DialogBodyContainer>) => {
  return <DialogBodyContainer data-testid='dialog-body' {...props} />;
};

const DialogFooter = (props: ComponentProps<typeof DialogFooterContainer>) => {
  return <DialogFooterContainer data-testid='dialog-footer' {...props} />;
};

// Add compound components to Dialog
export const Dialog = Object.assign(DialogBase, {
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
});
