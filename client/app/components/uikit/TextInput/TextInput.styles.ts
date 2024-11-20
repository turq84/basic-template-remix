import { ToggleButton } from 'react-aria-components';

import { styled } from '~styled-system/jsx';

export const InputContent = styled('div', {
  base: {
    position: 'relative',
    '& > svg + input': { paddingLeft: '$xl' },
    '& > input[data-password]': { paddingRight: '$xl' },
  },
});

export const PasswordToggleButton = styled(ToggleButton, {
  base: {
    position: 'absolute',
    height: '100%',
    top: '0px',
    right: '0px',
    paddingRight: '$small',
    paddingLeft: '$small',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '$regular',
    $focusRing: true,
  },
});
