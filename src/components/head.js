const Head = ({text}) => {
	return (
		<div className='head' >
			<img className='menu' src="/menu.png" width='19px' />
			<h1 className='headHeader' >{text}</h1>
			<img className='bell' src="/bell.png" width='19px' />
		</div>
	)
}

export default Head