import {
  Container,
  Toolbar,
  Typography,
  Box,
  Link,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3),
    },
  },
  menuBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
}));

const menu = ['home', 'courses', 'sign up'];

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <Container>
      <Toolbar>
        <Typography>Mammoth Interactive</Typography>
        <Box className={classes.menuBox}>
          {menu.map(menuOption => (
            <Link
              key={menuOption}
              component='button'
              variant='body1'
              className={classes.menuOption}
            >
              {menuOption.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
};

export default NavigationBar;
