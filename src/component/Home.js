import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel';
import MenuIcon from '@material-ui/icons/Menu';

class Home extends Component {
    render(){
        return (
            <div>
                <Mui.AppBar position="static">
                    <Mui.Toolbar variant="dense">
                 <Mui.IconButton edge="start" color="inherit" aria-label="menu">
                 <MenuIcon />
                 </Mui.IconButton>
                        <Mui.Typography variant="h6" color="inherit">
                         Wisata Semarang 
                        </Mui.Typography>
                    </Mui.Toolbar>
                </Mui.AppBar>
                <Carousel>
                    <img style={{width: 1400, height: 500}} src="/images2.jpg"/>
                    <img style={{width: 1400, height: 500}} src="/images(1).jpg" />
                    <img style={{width: 1400, height: 500}} src="/Bangunan_utama_masjid_agung_jateng.jpg"/>
                    <img style={{width: 1400, height: 500}} src="/Klenteng-Sam-Poo-Kong-Semarang-696x398.jpg"/>
                </Carousel>
                <Mui.Container fixed>
                <Mui.Grid container spacing={0}>
                    <Mui.Grid item xs={6}>
                    <Mui.Card>
                       <Mui.CardActionArea>
                       <Mui.CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/images.jpeg"
          title="Contemplative Reptile"
        />
        <Mui.CardContent>
          <Mui.Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Mui.Typography>
          <Mui.Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
      <Mui.CardActions>
        <Mui.Button size="small" color="primary">
          Share
        </Mui.Button>
        <Mui.Button size="small" color="primary">
          Learn More
        </Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
                    </Mui.Grid>
                    <Mui.Grid item xs={6}>                        
                    <Mui.Card>
      <Mui.CardActionArea>
        <Mui.CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://t1.gstatic.com/images?q=tbn:ANd9GcRhYs9gDzr9kty1WyKOa3J8lqrPtFX3wohngKWpym2v_KCYLwQzJFg5ZmRWSsGjdkCgD_8nCDxMU4_REM4LegP8sw"
          title="Contemplative Reptile"
        />
        <Mui.CardContent>
          <Mui.Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Mui.Typography>
          <Mui.Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
      <Mui.CardActions>
        <Mui.Button size="small" color="primary">
          Share
        </Mui.Button>
        <Mui.Button size="small" color="primary">
          Learn More
        </Mui.Button>
      </Mui.CardActions>
    </Mui.Card>
                     </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
            </div>
        )
    }
}

export default Home;