import styled from 'styled-components'

const StyledPhotoContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 50px 10px;
    padding:20px;

    img {
        height: 70vh;
        margin: 0 15px;
        // max-width: 50%;
    }

    .text-wrapper {
        background-color: lightgray;
        width: 45%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 70vh;
    }

    h1 {
        font-size: 2rem;
        padding: 10px;
        margin: 10px;
    }

    p {
        line-height: 1.3;
        padding: 10px;
        text-align: left;
        margin: 20px;


        overflow-y: scroll;

        ::-webkit-scrollbar {
            width: 5px;
        }
        ::-webkit-scrollbar-track {
            background: lightgray;
        }
        ::-webkit-scrollbar-thumb {
            background: darkgray;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: black;
        }
    }

    @media(max-width: 850px) {
        flex-direction: column;
        margin-top: 20px;

        .text-wrapper {
            height: auto;
            max-width: 100%;
            width: 100%;
            margin-top: 15px;
        }

        img {
            max-width: 100%;
            width: 100%;
            margin: 0;
        }
    }
`;



function NasaPhoto(props) {
    return (
        <StyledPhotoContent className="nasa-photo-wrapper">
            <img src={props.photo.hdurl} />
            <div className="text-wrapper">
                <h1>{props.photo.title}</h1>
                <h3>{props.photo.copyright ? `by ${props.photo.copyright}` : ""} on {props.photo.date}</h3>
                <p>{props.photo.explanation}</p>
            </div>
        </StyledPhotoContent>
    )
}

export default NasaPhoto;