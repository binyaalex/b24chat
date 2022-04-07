import './Head.css';
import MenuItem from './MenuItem'

const Head = ({text}) => {

	const menuItemsArr = [
		{
			link: 'http://localhost:3000/regularpage/mybaby',
			text: 'My Baby',
		},
		{
			link: 'http://localhost:3000/regularpage/fitness',
			text: 'Fitness',
		},
		{
			link: 'http://localhost:3000/regularpage/notifications',
			text: 'Notifications',
		},
	]

	const displayMenu = () => {
		const menu = document.querySelector('.menu')
		if (menu.style.display === 'none') {
			menu.style.display = 'block';
		} else {
			menu.style.display = 'none';
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