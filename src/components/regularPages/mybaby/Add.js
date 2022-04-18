const Add = () => {
	return (
		<div className='add'>
			<button className='addEsc'>X</button>
			<div className='inputsDiv' >
				<div className='textInputsDiv' >
					<input className='addHeader' type='text' placeholder='כותרת' />
					<input className='addDescription' type='text' placeholder='תיאור' />
				</div>
				<div className='imgInputDiv' >
					<i class="fas fa-solid fa-camera"></i>
					<button className='imgInput' >upload</button>
				</div>
			</div>
		</div>
	)
}

export default Add