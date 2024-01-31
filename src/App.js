import { Container, Grid } from '@mui/material';
import Album from './components/Album';
import AlbumView from './components/AlbumView';
import { useState } from 'react'

import fallDustCover from './images/fall-dust-cover.jpg';
import potpourriCover from './images/potpourri-flowerbed-cover.jpg';
import fabricCover from './images/fabric-cover.jpg'
import ambivertCover from './images/ambivert-cover.png';
import besidesCover from './images/besides-cover.jpg';
import cutingrasCover from './images/cutingras-cover.jpg';
import dadadziejCover from './images/da-da-dziej-cover.jpg';
import koalaCzechCover from './images/koala-czech-cover.jpg';
import particlePoshCover from './images/particle-posh-cover.jpg';
import surroundsCover from './images/surrounds-cover.png';
import tryCatchCover from './images/try-catch-cover.png';
import planogramCover from './images/planogram-cover.png';
import bowlsCover from './images/bowls-cover.jpg';

const App = () => {
  const [view, setView] = useState('');

  const fallDust = {
    cover: fallDustCover,
    title: 'Fall D_st',
    source: 'https://bandcamp.com/EmbeddedPlayer/album=3522454421/size=small/bgcol=ffffff/linkcol=7137dc/artwork=none/transparent=true/',
    tracklist: [
      ['aaa', '00:45'],
      ['88#', '01:48'],
      ['dll ket', '01:25'],
      ['cruch depp', '01:45'],
      ['vvintil hash', '04:48'],
      ['isokite', '01:10'],
      ['fall d_st', '04:24'],
      ['int cloqi', '01:52'],
      ['keprre dwe', '01:53'],
      ['sofe bir', '02:53'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/fall-d-st',
    soundcloud: '',
    released: '10.17.2013'
  }

  const potpourri = {
    cover: potpourriCover,
    title: 'Potpourri Flowerbed',
    source: "https://bandcamp.com/EmbeddedPlayer/album=2600777558/size=small/bgcol=ffffff/linkcol=7137dc/artwork=none/transparent=true/",
    tracklist: [
      ['manaboon/skycrumbs/vapors', '08:32'],
      ['moonjava', '04:13'],
      ['daises', '01:50'],
      ['softmarker/dandelion', '03:27'],
      ['sundries', '05:44'],
      ['birdlime/rosewater', '04:12'],
      ['(flowerbed)', '02:01'],
      ['dayblind/echelon', '03:28'],
      ['springsong', '05:48'],
      ['rivertones', '08:19'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/potpourri-flowerbed',
    soundcloud: '',
    released: '03.11.2014'
  }

  const fabric = {
    cover: fabricCover,
    title: 'Fabric',
    source: "https://bandcamp.com/EmbeddedPlayer/album=159534093/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['binky', '02:28'],
      ['chocolate & w/ balloons (at the end)', '03:06'],
      ['coos', '03:05'],
      ['fabric', '04:00'],
      ['bounce seat', '02:11'],
      ['birdlime/rosewater', '04:12'],
      ['(flowerbed)', '02:01'],
      ['dayblind/echelon', '03:28'],
      ['springsong', '05:48'],
      ['rivertones', '08:19'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/fabric',
    soundcloud: '',
    released: '06.30.2014'
  }

  const bowls = {
    cover: bowlsCover,
    title: 'Bowls',
  }

  const besides = {
    cover: besidesCover,
    title: 'Besides'
  }

  const daDaDziej = {
    cover: dadadziejCover,
    title: 'Da Da Dziej',
  }

  const particlePosh = {
    cover: particlePoshCover,
    title: 'Particle Posh'
  }

  const koalaCzech = {
    cover: koalaCzechCover,
    title: 'Koala Czech'
  }

  const planogram = {
    cover: planogramCover,
    title: 'Planogram'
  }

  const tryCatch = {
    cover: tryCatchCover,
    title: 'Try{ }Catch'
  }

  const surrounds = {
    cover: surroundsCover,
    title: 'Surrounds'
  }

  const ambivert = {
    cover: ambivertCover,
    title: 'Ambivert'
  }

  const cutingras = {
    cover: cutingrasCover,
    title: 'Cutingras'
  }

  const albums = [fallDust, potpourri, fabric, bowls, besides, daDaDziej, particlePosh, koalaCzech, planogram, tryCatch, surrounds, ambivert, cutingras];

  return (
    <Container>
      <Grid container spacing={2}>

        <Grid xs={12}>
          <h1>metadata <span className='alt'>:sound</span></h1>
        </Grid>

        <Grid xs={12}>
            {view === '' ? <h3 className='alt'>:albums</h3> : <a onClick={() => setView('')}><h3>:back</h3></a>}
        </Grid>

        {albums.map(album => {
          return (
            <Grid item xs={view === album.title ? 12 : 3}>
              {view === album.title ? <AlbumView data={album} setView={setView} /> : <></>}
              {view === '' ? <Album data={album} setView={setView} /> : <></>}
            </Grid>
          )
        })}

      </Grid>
    </Container>
  )
}

export default App;
