import UserSection from './UserSection'

const UserSectionList = () => {

	const userSectionListArr = [
		{
			header: 'שיעור יוגה ראשון',
			description: 'בלוטוס באר שבע',
			img: 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		},
		{
			header: 'שיעור יוגה ראשון',
			description: 'בלוטוס באר שבע',
			img: 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		},
	]

	return (
		<div className='userSectionList'>
			{
				userSectionListArr.map((el, i) => {
					return (
						<UserSection 
							img={el.img}
							header={el.header} 
							description={el.description} 
						/> 
					)
				})
			}
			<UserSection />
		</div>
	)
}

export default UserSectionList