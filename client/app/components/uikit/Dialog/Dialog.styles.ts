import { Dialog as AriaDialog } from 'react-aria-components';
import { styled } from '~styled-system/jsx';
import { cva } from '~styled-system/css';

export const dialogOverlayStyles = cva({
  base: {
    position: 'fixed',
    inset: 0,
    zIndex: 1000,
    minHeight: '100vh',
    minWidth: '100vw',
    backdropFilter: 'blur(4px)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  variants: {
    isEntering: {
      true: {
        animation: 'dialog-overlay-animation 150ms ease-out forwards',
      },
    },
    isExiting: {
      true: {
        animation: 'dialog-overlay-animation 100ms ease-in reverse',
      },
    },
  },
});

export const dialogModalStyles = cva({
  base: {
    position: 'fixed',
    zIndex: 1001,
    boxShadow: '$large',
    borderRadius: '$medium',
    backgroundColor: '$surface',

    mdDown: {
      width: '100%',
      maxWidth: 'calc(100vw - 32px)',
    },
  },
  variants: {
    isEntering: {
      true: {
        animation: 'var(--animation) 150ms ease-out forwards',
      },
    },
    isExiting: {
      true: {
        animation: 'var(--animation) 100ms ease-out reverse',
      },
    },
    placement: {
      middle: {
        '--animation': 'dialog-middle-animation',
        left: '50%',
        top: '50%',
        translate: '-50% -50%',
      },
      top: {
        '--animation': 'dialog-top-animation',
        left: '50%',
        top: '10%',
        translate: '-50% 0px',
      },
      bottom: {
        '--animation': 'dialog-bottom-animation',
        left: '50%',
        bottom: '10%',
        translate: '-50% 0px',
      },
      drawer: {
        '--animation': 'dialog-drawer-animation',
        top: '0px',
        right: '0px',
        bottom: '0px',
        width: '90vw',
        maxWidth: '500px',
        height: '100%',
        borderRadius: '0px',
      },
    },
  },
});

export const DialogContainer = styled(AriaDialog, {
  base: {
    outline: 'none',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
});

export const DialogHeaderContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '$small',
    justifyContent: 'space-between',
    paddingLeft: '$medium',
    paddingRight: '$small', // take close button into account
    paddingTop: '$regular',
  },
});

export const DialogBodyContainer = styled('div', {
  base: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '$medium',
    position: 'relative',
  },
});

export const DialogFooterContainer = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingInline: '$medium',
    paddingBottom: '$medium',
  },
});
