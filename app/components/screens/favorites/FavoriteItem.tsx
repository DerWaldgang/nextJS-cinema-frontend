import { FC } from 'react'

import { IMovie } from '@/shared/types/movies.types'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton/FavoriteButton')) 
import styles from './Favorites.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { getMovieSlugUrl } from '@/config/url.config'
import dynamic from 'next/dynamic'

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<DynamicFavoriteButton movieId={movie._id} isAbsolute/>

			<Link href={getMovieSlugUrl(movie.slug)} className={styles.item}>
				<Image
					alt={'Favorite'}
					src={movie.bigPoster}
					draggable={false}
					priority
					width={1000}
					height={1000}
				/>

				<div className={styles.title}>{movie.title}</div>
			</Link>
		</div>
	)
}

export default FavoriteItem
