const Head = ({text}) => {
	return (
		<div className='head' >
			<i class="fas fa-solid fa-bars"></i>
			<h1 className='headHeader' >{text}</h1>
			<i class="fas fa-regular fa-bell"></i>
		</div>
	)
}

export default Head