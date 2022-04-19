import MyBabyDate from './MyBabyDate'

const UserSection = ({img, header, description}) => {
	return (
		<section className='userSection' >
			<MyBabyDate num='4' day='10' month='אפר' />
			<main className='userSectionMain' >
				<img className='UserSectionImg' src={img} />
				<h1 className='userSectionH' >{header}</h1>
				<p className='userSectionP' >{description}</p>
			</main>
		</section>
	)
}

export default UserSection