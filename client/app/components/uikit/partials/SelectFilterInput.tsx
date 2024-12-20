import { useTranslation } from 'react-i18next';
import { VisuallyHidden } from 'react-aria';

import { styled } from '~styled-system/jsx';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import { IconButton } from '../IconButton';

type Props = {
  isLoading: boolean;
  inputValue: string;
  onInputChange: (value: string) => void;
};

export const SelectFilterInput = ({
  isLoading,
  inputValue,
  onInputChange,
}: Props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <VisuallyHidden>{t('searchOptions')}</VisuallyHidden>

      <Icon name='search' size={20} color='textMuted' />

      <Input
        // TODO: look into the eslint autofocus error
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        data-testid='select-filter-input'
      />

      {isLoading ? (
        <SpinnerWrapper>
          <Spinner size='small' color='text' />
        </SpinnerWrapper>
      ) : inputValue ? (
        <IconButton
          icon='close'
          size={24}
          label={t('clearFilter')}
          onPress={() => onInputChange('')}
          data-testid='select-filter-input-clear'
        />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled('label', {
  base: {
    '--outline-width': '1px',
    padding: '$small',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px', // try to match container border radius
    borderWidth: '1px',
    borderColor: '$line1',
    outlineOffset: 'calc(0px - var(--outline-width))',
    marginBottom: '$xs',

    '&:focus-within': {
      '--outline-width': '2px',
      borderColor: 'transparent',
      outline: 'var(--outline-width) solid token($colors.focusRing)',
    },
  },
});

const Input = styled('input', {
  base: {
    flex: 1,
    marginLeft: '$xs',
    marginRight: '$small',
    textStyle: '$body',
    textAlign: 'left',
  },
});

const SpinnerWrapper = styled('div', {
  base: {
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
