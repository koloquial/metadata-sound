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
import ausCover from './images/aus-cover.jpg';

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
    soundcloud: 'https://soundcloud.com/metadat_a/sets/metadata-fabric-june-2014',
    released: '06.30.2014'
  }

  const bowls = {
    cover: bowlsCover,
    title: 'Bowls',
    source: "https://bandcamp.com/EmbeddedPlayer/album=3932449156/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['in part by', '00:02'],
      ['one last thought before i go to sleep', '02:46'],
      ['gravity, feelers', '00:47'],
      ['&&', '02:48'],
      ['arm support', '03:14'],
      ['faint, were we talking?', '01:04'],
      ['charmingly,', '00:11'],
      ['somberbust', '03:22'],
      ['beyond the walls', '02:12'],
      ['press, later on', '01:28'],
    ],
    bonus: [
      ['15 am', '03:30'],
      ['pass through me', '03:15']
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/bowls',
    soundcloud: 'https://soundcloud.com/metadat_a/sets/metadata-bowls-september-2014',
    released: '09.12.2014'
  }

  const besides = {
    cover: besidesCover,
    title: 'Besides',
    source: "https://bandcamp.com/EmbeddedPlayer/album=3204027985/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['what once was, beside', '02:43'],
      ['blows away from my eyelashes', '01:50'],
      ['as brightly, through noon', '00:36'],
      ['though, careless upon night', '02:12'],
      ['by dawn, sprinkles a mess', '02:19'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/besides',
    soundcloud: 'https://soundcloud.com/metadat_a/sets/metadata-besides-september',
    released: '09.24.2014'
  }

  const daDaDziej = {
    cover: dadadziejCover,
    title: 'Da Da Dziej',
    source: "https://bandcamp.com/EmbeddedPlayer/album=891677090/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['well, say hello / no don’t mind', '03:03'],
      ['come again ?', '01:42'],
      ['kiss nigh nigh', '03:06'],
      ['da da', '01:56'],
      ['yours', '02:08'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/da-da-dziej',
    soundcloud: 'https://soundcloud.com/metadat_a/sets/metadata-da-da-dziej-dec-2014',
    released: '12.01.2014'
  }

  const particlePosh = {
    cover: particlePoshCover,
    title: 'Particle Posh',
    source: "https://bandcamp.com/EmbeddedPlayer/album=1246276476/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['allthingseverywhere', '02:12'],
      ['orange cones', '02:19'],
      ['piccups', '02:28'],
      ['dollop', '01:03'],
      ['stem', '05:15'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/particle-posh',
    soundcloud: 'https://soundcloud.com/metadat_a/sets/metadata-particle-posh-january',
    released: '01.16.2015'
  }

  const koalaCzech = {
    cover: koalaCzechCover,
    title: 'Koala Czech',
    source: "https://bandcamp.com/EmbeddedPlayer/album=3202129646/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['drop', '02:02'],
      ['down', '00:55'],
      ['dodge', '02:07'],
      ['deake', '02:10'],
      ['delve', '02:48'],
    ],
    bonus: [
      ['collector', '03:03'],
      ['captchya', '02:44'],
      ['candles', '04:40']
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/koala-czech',
    soundcloud: 'https://soundcloud.com/metadat_a/sets/metadata-koala-czech-2015',
    released: '01.16.2015'
  }

  const planogram = {
    cover: planogramCover,
    title: 'Planogram',
    source: "https://bandcamp.com/EmbeddedPlayer/album=1680369243/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['Track1', '00:48'],
      ['Track2', '01:24'],
      ['Track3', '00:24'],
      ['Track4', '00:42'],
      ['Track5', '01:12'],
      ['Track6', '01:12'],
      ['Track7', '00:54'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/planogram',
    soundcloud: '',
    released: '09.10.2017'
  }

  const tryCatch = {
    cover: tryCatchCover,
    title: 'Try{ }Catch',
    source: "https://bandcamp.com/EmbeddedPlayer/album=4078562382/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['Try{', '00:48'],
      ['Sometimes when I think of you', '02:24'],
      ['ize', '00:48'],
      ['Slipp the Sunrise, Sunset', '02:12'],
      ['Then * This', '02:00'],
      ['And, well into', '04:40'],
      ['On my way', '02:18'],
      ['}Catch', '00:48'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/try-catch',
    soundcloud: '',
    released: '05.06.2018'
  }

  const surrounds = {
    cover: surroundsCover,
    title: 'Surrounds',
    source: "https://bandcamp.com/EmbeddedPlayer/album=1803367422/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['Torn', '02:24'],
      ['Fuzz', '02:24'],
      ['Twis', '04:00'],
      ['Vice', '01:48'],
      ['Ado', '03:25'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/surrounds',
    soundcloud: 'https://soundcloud.com/metadat_a/sets/metadata-surrounds-october',
    released: '10.14.2020'
  }

  const ambivert = {
    cover: ambivertCover,
    title: 'Ambivert',
    source: "https://bandcamp.com/EmbeddedPlayer/album=761001958/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['Desi', '01:43'],
      ['Dera', '01:22'],
      ['Turn', '00:51'],
      ['Totis', '02:42'],
      ['Viribus', '02:59'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/ambivert',
    soundcloud: 'https://soundcloud.com/metadat_a/sets/ambivert',
    released: '10.20.2020'
  }

  const cutingras = {
    cover: cutingrasCover,
    title: 'Cutingras',
    source: "https://bandcamp.com/EmbeddedPlayer/album=510312726/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['Couchdze', '00:47'],
      ['Ttreehiuse', '02:46'],
      ['Grilledcheese', '00:57'],
      ['Firsttime', '01:07'],
      ['Anymore', '01:47'],
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/cutingras',
    soundcloud: 'https://soundcloud.com/metadat_a/sets/cutingras',
    released: '02.05.2022'
  }

  const ausolaSerila = {
    cover: ausCover,
    title: 'Ausola Serila',
    source: "https://bandcamp.com/EmbeddedPlayer/album=2138026277/size=small/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/",
    tracklist: [
      ['Razi Fada', '01:48'],
      ['Glasward', '02:24'],
      ['Splischishi', '01:49'],
      ['Wapa Audiscli', '00:53'],
      ['Epotit Vidi', '01:45'],
      ['Alis Epsi', '01:55']
    ],
    bandcamp: 'https://mtadta.bandcamp.com/album/ausola-serila',
    soundcloud: 'https://soundcloud.com/faerie-ring/sets/ausola-serila',
    released: '12.22.2022'
  }

  const albums = [fallDust, potpourri, fabric, bowls, besides, daDaDziej, particlePosh, koalaCzech, planogram, tryCatch, surrounds, ambivert, cutingras, ausolaSerila];

  return (
    <Container>
      <Grid container spacing={2}>

        <Grid xs={12}>
          <h1>metadata <span className='alt'>:sound</span></h1>
        </Grid>

        <Grid xs={12}>
            {view === '' ? 
              <h3 className='alt'>:albums</h3> : 
              <a onClick={() => setView('')}><h3>:back</h3></a>}
        </Grid>
        
          {albums.map(album => {
            if(view === album.title){
              return (
                <Grid item xs={12}>
                  <AlbumView data={album} setView={setView} />
                </Grid>
              )
            }

            if(view === ''){
              return (
                <Grid item xs={3}>
                  <Album data={album} setView={setView} />
                </Grid>
              )
            }
          })}
      </Grid>
    </Container>
  )
}

export default App;
