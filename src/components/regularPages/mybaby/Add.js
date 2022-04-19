import {connect} from 'react-redux';
import {addDateAction, addAction} from '../../../redux/actions';
import Dates from '../../headPages/Dates.js';

const Add = ({displayAdd, addDate, add}) => {

	return (
		<div className='add'>
			<div className='addDate'>
				<h1 className='addDateH' >בחרי תאריך</h1>
				<Dates />
				<button onClick={addDate} className='addDateOkBtn OkBtn' >אישור</button>
			</div>
			<div className='addContent'>
				<button onClick={displayAdd} className='addEsc'>X</button>
				<div className='inputsDiv' >
					<div className='textInputsDiv' >
						<input className='addHeader' type='text' placeholder='כותרת' />
						<input className='addDescription' type='text' placeholder='תיאור' />
					</div>
					<div className='imgInputDiv' >
						<button className='imgInput' >תמונה</button>
						<i class="camera fas fa-solid fa-camera"></i>
					</div>
					<button onClick={add} className='addContentOkBtn OkBtn' >אישור</button>
				</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(addAction()),
    addDate: () => dispatch(addDateAction()),
  }
}

export default connect(null, mapDispatchToProps)(Add) 
