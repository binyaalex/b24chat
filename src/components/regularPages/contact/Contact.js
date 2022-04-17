import './Contact.css';
import React, { useEffect } from 'react';
import DetailsList from './DetailsList'

const Contact = ({setPageInfo}) => {

	useEffect(() => {
		setPageInfo({header: 'איש קשר', className: 'contactPage'})
	},[]);

	return (
		<div className='contactPage'>
			<DetailsList />
		</div>
	)
}

export default Contact