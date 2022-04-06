import './Head.css';
import MenuItem from './MenuItem'

const Head = ({text}) => {

	const menuItemsArr = ['My Baby', 'Fitness', 'Notifications']

	return (
		<>
			<div className='head' >
				<img className='menuIcon' src="/images/head/menu.png" width='19px' />
				<h1 className='headHeader' >{text}</h1>
				<img className='bell' src="/images/head/bell.png" width='19px' />
			</div>
			<div className='menu' >
				<div className='mainList' >
					{
						menuItemsArr.map((el, i) => {
							return (
								<MenuItem text={el} key={i} /> 
							)
						})
					}
				</div>
			</div>
		</>
	)
}

export default Head