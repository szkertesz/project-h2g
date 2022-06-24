import {Movie} from '../interfaces/Movie'

function MovieItem(props: Movie) {
    return (
        <article>
            <div>
                <div>
                    <h3>Title {props.title}</h3>
                    <ul>
                        <li>genre x</li>
                        <li>genre y</li>
                        <li>genre z</li>
                    </ul>
                </div>
                <time dateTime='year'>year</time>
            </div>
            <img src='' alt='' />
        </article>
    );
}

export default MovieItem
