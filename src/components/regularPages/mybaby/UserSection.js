import MyBabyDate from './MyBabyDate'

const UserSection = () => {
	return (
		<section className='userSection' >
			<MyBabyDate num='4' day='10' month='אפר' />
			<main className='userSectionMain' >
				<img className='UserSectionImg' src='https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg' />
				<h1 className='userSectionH' >שיעור יוגה ראשון</h1>
				<p className='userSectionP' >בלוטוס באר שבע</p>
			</main>
		</section>
	)
}

export default UserSection