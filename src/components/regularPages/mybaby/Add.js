import {connect} from 'react-redux';
import {addAction} from '../../../redux/actions';

const Add = ({displayAdd, add}) => {

	return (
		<div className='add'>
			<button onClick={displayAdd} className='addEsc'>X</button>
			<div className='inputsDiv' >
				<div className='textInputsDiv' >
					<input className='addHeader' type='text' placeholder='כותרת' />
					<input className='addDescription' type='text' placeholder='תיאור' />
				</div>
				<div className='imgInputDiv' >
					<i class="fas fa-solid fa-camera"></i>
					<button className='imgInput' >upload</button>
				</div>
				<button onClick={add} className='addOkBtn' >אישור</button>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addAction()),
    // endTheGame: () => dispatch(endTheGameAction())
  }
}

export default connect(null, mapDispatchToProps)(Add) 
