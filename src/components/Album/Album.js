const Album = ({ data, setView }) => {
    return (
        <div className='album-container' onClick={() => setView(data.title)}>
            <img src={data.cover} />
        </div>
    )
}

export default Album;