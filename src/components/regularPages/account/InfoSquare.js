const InfoSquare = ({img, header, paragraph}) => {

	return (
		<section className='infoSquare' >
			<div className='infoSquareImgDiv' >
				<img className='infoSquareImg' src={img} />
			</div>
			<div className='infoSquareTextDiv' >
				<h1 className='infoSquareH' >{header}</h1>
				<div className='infoSquareP' >{paragraph}</div>
			</div>
		</section>
	)
}

export default InfoSquare