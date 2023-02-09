import { createStyles, MantineNumberSize } from '@mantine/core';

export interface HomePageStylesParams {
}

export default createStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  revolution: {
    color: 'hsl(11, 80%, 60%)'
  },
  hero: {
    backgroundColor: 'black',
    flexGrow: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  heroBackground: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    opacity: 0.2
  },
  heroInner: {
    height: '100%',
    flexGrow: 1,
    zIndex: 10000,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'white',
    padding: theme.spacing.lg * 1.8,
    width: '50%',
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: '80%'
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '100%'
    },
  },
  heroSection: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing.lg * 1.8
    }
  },
  heroSectionTitle: {
    color: 'hsl(11, 80%, 60%)'
  },
  heroSectionContent: {
    textAlign: 'justify',
    fontSize: theme.fontSizes.sm
  }
}));

