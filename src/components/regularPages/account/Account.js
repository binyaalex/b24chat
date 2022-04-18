import './Account.css';
import React, { useEffect } from 'react';
import AccountMain from './AccountMain'
import InfoList from './InfoList'

const Account = ({setPageInfo}) => {

	useEffect(() => {
		setPageInfo({header: 'החשבון שלי', className: 'accountPage'})
	},[]);

	return (
		<div className='accountPage'>
			<AccountMain />
			<InfoList />
		</div>
	)
}

export default Account