import { DefaultProps, Selectors, MantineNumberSize, Box } from '@mantine/core';
import { Julius_Sans_One, Cinzel_Decorative } from '@next/font/google';
import useStyles, { HomePageStylesParams } from './HomePage.styles';
import hero from "./assets/hero.jpeg";


type HomePageStylesNames = Selectors<typeof useStyles>

interface HomePageProps extends DefaultProps<HomePageStylesNames, HomePageStylesParams> {
}

const julius = Julius_Sans_One({ subsets: ['latin-ext'], weight: ['400'], display: 'swap' });
const cinzel = Cinzel_Decorative({ subsets: ['latin'], weight: ['700'], display: 'swap' });

export const HomePage: React.FC<HomePageProps> = ({
  classNames,
  styles,
  unstyled,
  className,
  ...others
}) => {
  const { classes, cx } = useStyles(
    undefined,
    { name: 'HomePage', classNames, styles, unstyled }
  );

  return (
    <Box className={cx(classes.root, className)} {...others}>
      <Box className={cx(classes.header, cinzel.className)}><span className={classes.revolution}>Revolution</span>&nbsp;Whales</Box>
      <Box className={cx(classes.hero)}>
        <Box component="img" className={cx(classes.heroBackground)} style={{ backgroundImage: `url(${hero.src})` }} />
        <Box className={classes.heroInner}>
          <Box className={classes.heroSection}>
            <Box className={cx(classes.heroSectionTitle, cinzel.className)}>RevPop Community</Box>
            <Box className={cx(classes.heroSectionContent, julius.className)}>
              In a world where the right to free speech is constantly under attack, it has become more important than ever to uphold and protect this fundamental right.
              Abuses in the digital space have led to the deterioration of democratic processes around the world.
              To address this issue, Revolution Populi aims to create decentralized protocols for online communication that are beyond the control of governments and big tech companies.
              Technology is just one part of the solution, as decentralization at the network level requires a well-organized and informed community. &nbsp;
              <span className={classes.revolution}>RevolutionWhales</span> is stepping up to the challenge by nurturing the RevPop community by providing essential resources and <span className={classes.revolution}>education</span> on network management.
              Join us in our first community <span className={classes.revolution}>staking program</span>, where our main goal is to ensure the well-being of our <span className={classes.revolution}>community</span>.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
