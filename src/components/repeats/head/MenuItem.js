const MenuItem = ({text, link}) => {
	return (
		<a className='menuItem' href={link} >
			<img className='menuItemIcon' />
			<h1 className='menuItemHeader' >{text}</h1>
		</a>
	)
}

export default MenuItem