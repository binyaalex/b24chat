import React, { useEffect } from 'react';
import DetailSquare from './DetailSquare';

const DetailsList = () => {

	const containerArr = [
		{
			img: '/images/contact/photo.png',
			info: 'תמונה'
		},
		{
			img: '/images/contact/name.png',
			info: 'שרה זילבר'
		},
		{
			img: '/images/contact/phone.png',
			info: '+972 54 777 88 99'
		},
		{
			img: '/images/contact/email.png',
			info: 'sarah_zilber@gmail.com'
		},
	]

	return (
		<main className='detailsList' >
			{
				containerArr.map((el, i) => {
					console.log(el.massageAfterBold)
					return (
						<DetailSquare
							img={el.img}
							info={el.info}
						/> 
					)
				})
			}
		</main>
	)
}

export default DetailsList