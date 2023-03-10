
import { FC } from 'react'


import Heading from '@/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import AdminNavigation from '@/components/ui/admin-ui/admin-nav/AdminNavigation'
import AdminHeader from '@/components/ui/admin-ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/admin-ui/admin-table/AdminTable/AdminTable'
import { useActors } from '@/hooks/admin/useActors'



const ActorList: FC = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useActors()

	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader
				onClick={createAsync}
				handleSearch={handleSearch}
				searchTerm={searchTerm}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Name', 'Count movies']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default ActorList