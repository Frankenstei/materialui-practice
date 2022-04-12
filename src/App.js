import React from 'react';
import {Typography, AppBar, Card, Button, CardActions, Grid, CardContent, CardMedia, CssBaseline, Toolbar, Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles';
import cardImage from './cardImage.jpg';
/*import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles((theme)=>({
  logoIcon:{
    marginRight:'10px'
  },
  container:{
    backgroundColor:theme.palette.background.paper,
    padding:theme.spacing(8,0,6)
  }
}))

the commented code is better imported from another file
*/
const cards=[1,2,3,4,5,6,7,8,9];

const App=()=>{

  const classes=useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.logoIcon} />
          <Typography variant='h6'>
            LVD PhotoAlbum
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth='sm' className={classes.container}>
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              These are somethings I would like to show in order for you to see past memories of places, 
              occasions and times that would give you a nostalgic feeling, join me...
            </Typography>
          </Container>
        </div>
        <div>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained' color='primary'>
                See my photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {
              cards.map((card)=>(
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image={cardImage} title='card Image' />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Insight Pictures
                    </Typography>
                    <Typography>
                      This is an innovative logo created by ...
                    </Typography>
                    <CardActions>
                      <Button size='small' color='primary'>View</Button>
                      <Button size='small' color='primary'>Edit</Button>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
              ))
            }
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          Information about the footer
        </Typography>
      </footer>
    </>
  )
}

export default App;

/*

inline styling is in the form of:

<Container maxWidth='sm' style={{marginTop:'2px'}}

*/


/* instead of just duplicating the card elements we use an array and map over them*/