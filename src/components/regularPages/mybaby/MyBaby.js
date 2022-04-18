import './MyBaby.css';
import React, { useEffect } from 'react';
import MyBabyDate from './MyBabyDate'

const MyBaby = ({setPageInfo}) => {

	useEffect(() => {
		setPageInfo({header: 'התינוק שלי', className: 'mybabyPage'})
	},[]);

	return (
		<div className='myBaby' >
			<section className='mybabySection' >
				<MyBabyDate day='28' month='פבר' />
				<main className='mybabySectionMain mybabySectionMain1' >
					<img className='mybabySection1Img' src='/images/myBaby/babyPaint.png' />
					<div className='mybabySection1Text' >
						<h1 className='mybabySection1TextHeader' >ממש עכשיו</h1>
						<p className='mybabySection1TextP' >שבוע חמישי</p>
						<button className='mybabySection1TextBtn' >מידע על השבוע</button>
					</div>
				</main>
			</section>
			<section className='mybabySection' >
				<MyBabyDate day='12' month='מרץ' />
				<main className='mybabySectionMain mybabySectionMain2' >
					<img className='mybabySection2MainImg' src="/images/myBaby/hands4.jpg" />
					<div className='mybabySection2SubImages' >
						<img className='mybabySection2SubImages1' src='/images/myBaby/ultraBaby.jpg' />
						<img className='mybabySection2SubImages2' src='/images/myBaby/ultrasound.jpg' />
					</div>
				</main>
			</section>
			<section className='mybabySection mybabySection3' >
				<MyBabyDate day='27' month='מרץ' />
				<main className='mybabySectionMain' >
					<img className='mybabySection3Img' src='/images/myBaby/yoga.jpg' />
					<div className='mybabySection3Text' >
						<h1 className='mybabySection3TextHeader' >יוגה לנשים בהרין</h1>
						<p className='mybabySection3TextP' >מרכז יוגה לוטוס, באר -שבע</p>
						<time className='mybabySection3TextTime' >11:00 am</time>
						<div className='mybabySection3TextGrades' >
							<i class="fas fa-solid fa-star star"></i>
							<p className='mybabySection3TextGradesScore' >4.8</p>
							<p className='mybabySection3TextGradesReviews' >(מעל לאלף ביקורות)</p>
						</div>
					</div>
				</main>
			</section>
			<section className='mybabySection mybabySection4' >
				<div className='lastDate' >
					<MyBabyDate num='4' day='04' month='אפר' />
					<img className='plus' src="/images/myBaby/cross.png" width='30px' />
				</div>
				<main className='mybabySectionMain mybabySectionMain4' >
					<h1 className='mybabySection4Header' >יש לך פגישת ייעוץ אונליין עם הרופא שלך</h1>
					<img className='mybabySection4Btn' src="/images/myBaby/arrow.png" />
				</main>
			</section>
		</div>
	)
}

export default MyBaby