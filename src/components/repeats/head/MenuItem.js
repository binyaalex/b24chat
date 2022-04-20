import { Link } from "react-router-dom"

const MenuItem = () => {


	const menuItemsArr = [
		{
			link: '/headpage/start',
			text: 'התחלה',
		},
		{
			link: '/regularpage/mybaby',
			text: 'התינוק שלי',
		},
		{
			link: '/regularpage/fitness',
			text: 'כושר',
		},
		{
			link: '/regularpage/notifications',
			text: 'התראות',
		},
		{
			link: '/regularpage/account',
			text: 'החשבון שלי',
		},
		{
			link: '/regularpage/contact',
			text: 'איש קשר',
		},
		{
			link: '/hospital',
			text: 'Hospital',
		},
		{
			link: '/appointment',
			text: 'Appointment',
		},
		{
			link: '/doctor',
			text: 'Doctor',
		},
	]


	return (
		<div className='mainList' >
			{
				menuItemsArr.map((el, i) => {
					return (<Link className='menuItem' to={el.link} key={i} >
						<img className='menuItemIcon' />
						<h1 className='menuItemHeader' >{el.text}</h1>
					</Link>)
				})
			}
			
		</div>
	)
}

export default MenuItem