const Footer = () => {
	return (
		<footer className='footer' >
			{/*<div className='sos' >SOS</div>*/}
			<img className='sos' src="/sos.png" />
			{/*<i class="fas fa-regular fa-house-user"></i>*/}
			<img className='grayIcon home' src="/home.png" />
			<img className='grayIcon book' src="/book.png" />
			<img className='grayIcon grayBell' src="/grayBell.png" />
			<img className='grayIcon user' src="/user.png" />
			{/*<i class="fas fa-solid fa-book"></i>*/}
			{/*// <i class="fas fa-regular fa-bell"></i>*/}
			{/*<i class="fas fa-solid fa-user"></i>*/}
			{<i class="fas fa-regular fa-comments comments"></i>}
			{/*<img className='chat' src="/chat.png" />*/}
		</footer>
	)
}

export default Footer