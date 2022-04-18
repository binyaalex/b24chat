
const AccountMain = () => {

	const content = {
		personImg: '/images/contact/photo.png',
		name: 'שרה זילבר',
		weeksCount: 'שבוע חמישי',
		countImg: '/images/account/count2.png',
		daysBeen: `עברו 35 יום`,
		daysLeft: 'נשארו 275 יום',
	}

	return (
		<div className='accountMain'>
			<div className='accountMainImgDiv' >
				<img className='accountMainImg' src={content.personImg} />
			</div>
			<div className='accountMainText' >
				<h1 className='accountMainTextH' >{content.name}</h1>
				<p className='accountMainTextP' >{content.weeksCount}</p>
				<img className='accountMainTextImg' src={content.countImg} />
				<div className='accountMainTextDays' >
					<div className='daysBeen' >{content.daysBeen}</div>
					<div className='daysLeft' >{content.daysLeft}</div>
				</div>
			</div>
		</div>
	)
}

export default AccountMain