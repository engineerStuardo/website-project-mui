import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainGridItem: {
    backgroundColor: 'blue',
  },
  secondRowFirstItem: {
    backgroundColor: 'red',
  },
}));

const GridLayout = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item lg={12} sm={12} xs={12}>
        <Typography className={classes.mainGridItem}>Main Grid Item</Typography>
      </Grid>
      <Grid item sm={6} lg={12}>
        <Typography className={classes.secondRowFirstItem}>
          Second row first item
        </Typography>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default GridLayout;
