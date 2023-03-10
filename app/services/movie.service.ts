import { IMovieEditInput } from '@/components/screens/admin/movies/MovieEdit/movie-edit.interface'

import { IMovie } from '@/shared/types/movies.types'

import axios, { axiosClassic } from 'api/interceptors'

import { API_SERVER_URL, API_URL, getMoviesUrl } from '@/config/api.config'
import { IS_PRODUCTION } from '@/config/constants.config'

export const MovieService = {
	async getAllMovies(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('most-popular')
		)
		return movies
	},
	async getBySlugMovie (slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`by-slug/${slug}`))
	},

	async getMoviesByGenres(genreIds: string[]) {
		const URL = IS_PRODUCTION ? API_SERVER_URL : API_URL

		const data: IMovie[] = await fetch(`${URL}/movies/by-genres/`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({genreIds})
		}).then(res => res.json())

		// const data = axiosClassic.post<IMovie[]>(getMoviesUrl('/by-genres'), {
		// 	genreIds
		// }) // DOESN'T WORK IN PRODUCT ???

		return data

	},

	async getMoviesByActor(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`by-actor/${actorId}`))
	},

	async createMovie() {
		return axios.post<string>(getMoviesUrl(''))
	},

	async deleteMovie(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},

	async updateMovie(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},

	async getByIdMovie(_id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.put<string>(getMoviesUrl('update-count-opened'), {slug})
	}
}
