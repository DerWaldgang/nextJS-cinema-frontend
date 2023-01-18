import Link from 'next/link';
import { FC } from 'react';
import { IMovieList } from './movie-list.interface';
import MovieItem from './MovieItem';

import styles from './MovieList.module.scss'

const MovieList:FC<IMovieList> = ({title, link, movies}) => {

    return (
        <div className={styles.list}>
            <div className={styles.heading}>{title}</div>
            {movies.map((movie) => <MovieItem key={movie._id} movie={movie}/>)}
            <Link href={link} className={styles.button}>
                See more
            </Link>
        </div>
    );
};

export default MovieList;