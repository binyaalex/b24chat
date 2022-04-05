const Head = ({text}) => {
	return (
		<div className='head' >
			<img className='menu' src="/images/head/menu.png" width='19px' />
			<h1 className='headHeader' >{text}</h1>
			<img className='bell' src="/images/head/bell.png" width='19px' />
		</div>
	)
}

export default Head