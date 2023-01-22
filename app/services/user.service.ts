import { getUsersUrl } from "@/config/api.config"
import { IUser } from "@/shared/types/user.types"
import  axios  from "@/utils/api/interceptors"


export const UserService = {

    async getAllUsers(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

    async deleteUser(_id: string) {
        return axios.delete<string>(getUsersUrl(`/${_id}`))
    }
}