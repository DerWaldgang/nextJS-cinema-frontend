import { GetStaticProps, NextPage } from 'next'

import MoviesCatalog from '@/components/ui/catalog/MoviesCatalog'

import { IMovie } from '@/shared/types/movies.types'

import { MovieService } from '@/services/movie.service'

const NewMoviesPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<>
			<MoviesCatalog
				movies={movies || []}
				title="Movies"
				description="Watch movies and series in excellent quality!"
			/>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAllMovies()
		const sortedByYearMovies = movies.sort(
			(a: IMovie, b: IMovie) => b.parameters.year - a.parameters.year
		)
		return {
			props: {
				movies: sortedByYearMovies,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
export default NewMoviesPage
