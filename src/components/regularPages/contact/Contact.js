import './Contact.css';
import React, { useEffect } from 'react';
import DetailsList from './DetailsList'

const Contact = ({setPageInfo}) => {

	useEffect(() => {
		setPageInfo({header: 'איש קשר', className: 'contactPage'})
	},[]);

	return (
		<div className='contactPage'>
{/*			<div className='contactPhoto' >
				<div className='contactPhotoImgDiv' >
					<img className='contactPhotoImg' src='' />
				</div>
				<div className='contactPhotoTextDiv' >
					<h1 className='contactPhotoInfo' ></h1>
					<button className='contactPhotoEdit' >ערוך</button>
				</div>
			</div>*/}
			<DetailsList />
		</div>
	)
}

export default Contact