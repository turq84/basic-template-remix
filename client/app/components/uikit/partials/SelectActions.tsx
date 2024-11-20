import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { styled } from '~styled-system/jsx';
import { Button } from '../Button';

type Props = {
  onConfirm?: ComponentProps<typeof Button>['onPress'];
  onClear?: ComponentProps<typeof Button>['onPress'];
};

export const SelectActions = ({ onClear, onConfirm }: Props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      {!!onClear && (
        <Button
          key='clear'
          color='primary'
          variant='plain'
          onPress={onClear}
          data-testid='select-actions-clear'
        >
          {t('clear')}
        </Button>
      )}

      {!!onConfirm && (
        <Button
          key='confirm'
          color='primary'
          variant='filled'
          onPress={onConfirm}
          data-testid='select-actions-confirm'
        >
          {t('confirm')}
        </Button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  base: {
    marginTop: '$xs',
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '$xs',

    '& button': {
      flex: 1,
    },
  },
});
