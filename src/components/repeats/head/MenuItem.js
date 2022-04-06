const MenuItem = ({text}) => {
	return (
		<a className='menuItem' href='http://localhost:3000/regularpage/mybaby' >
			<img className='menuItemIcon' />
			<h1 className='menuItemHeader' >{text}</h1>
		</a>
	)
}

export default MenuItem