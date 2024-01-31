import { Grid } from '@mui/material';

const AlbumView = ({ data, setView }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <div style={{verticalAlign: 'top', display: 'inline-block'}}>
                    <img src={data.cover} />
                    <iframe style={{
                        border: '0', 
                        width: '100%', 
                        height: '42px'}} 
                        src={data.source} 
                        seamless 
                    />
                </div>
            </Grid>

            <Grid item xs={6}>
                <div style={{verticalAlign: 'top', display: 'inline-block'}}>
                    <p><span className='alt'>title:</span> {data.title.toLowerCase()}</p>

                    <p><span className='alt'>released:</span> {data.released.toLowerCase()}</p>

                    <p><span className='alt'>bandcamp:</span> <a href={data.bandcamp} target="_blank">link</a></p>

                    {data.soundcloud ? <p><span className='alt'>soundcloud:</span><a href={data.soundcloud} target="_blank">link</a></p> : <></>}

                    <p><span className='alt'>download:</span> <a href={data.download} target="_blank">link</a></p>
        </div>
        </Grid>

        <Grid item xs={12}>
            <h3 className='alt'>:tracklist</h3>
            <table style={{width: '100%'}}>
                {data.tracklist.map(track => {
                    return (
                        <tr>
                            <td><p>{track[0]}</p></td>
                            <td style={{textAlign: 'right'}}><p>{track[1]}</p></td>
                        </tr>
                    )
                })}
            </table>
        </Grid>
    </Grid>
    )
}

export default AlbumView;