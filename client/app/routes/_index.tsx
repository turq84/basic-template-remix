import type { MetaFunction } from '@remix-run/node';
import { css } from '~styled-system/css';
import { styled } from '~styled-system/jsx';
import { Stack, Text, Button } from '~uikit';

export const meta: MetaFunction = () => {
  return [
    { title: 'Welcome to Remix!' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

const Index = () => {
  return (
    <Wrapper>
      <Stack direction='column' gap='large' justify='center' align='center'>
        <div
          className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'red' })}
        >
          Hello from Panda CSS 🐼!
        </div>
        <Text variant='headingL' color='brand' align='center'>
          This is content from a text component
        </Text>
        <Stack direction='row' gap='regular'>
          <Button variant='outlined' color='error'>
            Button One
          </Button>
          <Button variant='filled' color='primary'>
            Button Two
          </Button>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled('div', {
  base: {
    padding: '$medium',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$medium',
    border: '1px solid black',
    width: '500px',
    margin: '0 auto',
  },
});
