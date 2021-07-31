import React from 'react' ;
const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8) {
        return "green";
    }else if (vote >= 6) {
        return "orange";
    }else {
        return "red"
    }

}

const movie = ({ title , poster_path , overview , vote_average}) => (
    <div className="movie">
        <img src ={
            poster_path ?
            IMG_API + poster_path 
        :" https://previews.123rf.com/images/archnoi1/archnoi11811/archnoi1181100335/111611489-film-slate-board-or-cinema-act-clapperboard-on-woman%E2%80%99s-hand-with-take-action-scence-blank-copyspace-.jpg" }alt={title} />
        <div className="movie_info">
            <h3>
                {title}
            </h3>
            <span className={ `tag ${setVoteClass(vote_average)}`}>{vote_average}</span>

        </div>
        <div className="movie_over">
            <h2>Overview</h2>
            <p>{overview}</p>
        </div>
    </div>
)
export default movie;