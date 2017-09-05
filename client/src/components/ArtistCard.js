import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ArtistStyles = styled.div`
    width: 30%;
    margin: 20px 0;
    box-shadow: 1px 1px 5px black;
    img {
        width: 100%;
        max-height: 200px
    }
    h3 {
        padding: 5px 0;
    }
`

const ArtistCard = (props) => {
    const artist = props.artist
    return (
        <ArtistStyles>
            <Link to={`/artist/${artist.id}`}>
                <img src={artist.photo_url} alt={artist.name} />
                <h3>{artist.name}</h3>
            </Link>
        </ArtistStyles>
    );
}

export default ArtistCard;