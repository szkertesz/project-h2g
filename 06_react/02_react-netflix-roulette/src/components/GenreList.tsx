import classes from './GenreList.module.scss'

interface Props {
    genres: string[];
}
const GenreList: React.FC<Props> = ({genres}) => {
    return (
        <ul className={classes['genre-list']}>
            {genres.map((genreItem, i, genres) => {
                return (
                    <li key={i}>{`${genreItem}${
                        i < genres.length - 1 ? `, ` : ``
                    }`}</li>
                );
            })}
        </ul>
    );
};

export default GenreList