import './Head.css';
import MenuItem from './MenuItem'

const Head = ({text}) => {

	const menuItemsArr = [
		{
			link: 'http://localhost:3000/headpage/start',
			text: 'התחלה',
		},
		{
			link: 'http://localhost:3000/regularpage/mybaby',
			text: 'התינוק שלי',
		},
		{
			link: 'http://localhost:3000/regularpage/fitness',
			text: 'כושר',
		},
		{
			link: 'http://localhost:3000/regularpage/notifications',
			text: 'התראות',
		},
		{
			link: 'http://localhost:3000/regularpage/contact',
			text: 'איש קשר',
		},
	]

	const displayMenu = () => {
		const menu = document.querySelector('.menu')
		if (menu.style.display === 'block') {
			menu.style.display = 'none';
		} else {
			menu.style.display = 'block';
		}
	}

	return (
		<>
			<div className='head' >
				<img onClick={displayMenu} className='menuIcon' src="/images/head/menu.png" width='19px' />
				<h1 className='headHeader' >{text}</h1>
				<img className='bell' src="/images/head/bell.png" width='19px' />
			</div>
			<div className='menu' >
				<img onClick={displayMenu} className='menuEsc' src='/images/head/esc.png' />
				<div className='mainList' >
					{
						menuItemsArr.map((el, i) => {
							return (
								<MenuItem text={el.text} link={el.link} key={i} /> 
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default Head