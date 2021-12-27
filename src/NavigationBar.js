import { Container, Toolbar, Typography, Box, Link } from '@material-ui/core';

const menu = ['home', 'courses', 'sign up'];

const NavigationBar = () => {
  return (
    <Container>
      <Toolbar>
        <Typography>Mammoth Interactive</Typography>
        <Box>
          {menu.map(menuOption => (
            <Link component='button' variant='body1'>
              {menuOption.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
};

export default NavigationBar;
