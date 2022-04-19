export const initState = {
	userSectionsArr: [
		// {
		// 	day: '10',
		// 	month: 'אפר',
		// 	year: '2022',
		// 	header: 'שיעור יאשון',
		// 	description: 'בלוטוס באר שבע',
		// 	img: 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		// },
		// {
		// 	day: '12',
		// 	month: 'אפר',
		// 	year: '2023',
		// 	header: 'שיעור יוגה ראשון',
		// 	description: 'בלוטוס באר שבע',
		// 	img: 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		// },
	]
}

export const reducer = (state=initState, action={}) => {
	const addContent = document.querySelector('.addContent')
	switch(action.type) {
		case 'ADD':
			console.log('addReducer')
			const addHeader = document.querySelector('.addHeader').value
			const addDescription = document.querySelector('.addDescription').value
			const addImg = 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
			console.log(addHeader)
			console.log(state)
			let newUserSectionsContentArr = [...state.userSectionsArr]
			console.log(newUserSectionsContentArr)
			console.log(newUserSectionsContentArr.length-1)
			newUserSectionsContentArr[newUserSectionsContentArr.length-1].header = addHeader
			newUserSectionsContentArr[newUserSectionsContentArr.length-1].description = addDescription
			newUserSectionsContentArr[newUserSectionsContentArr.length-1].img = addImg
			const hospitalAndUserSections = document.querySelector('.hospitalAndUserSections')
			addContent.style.display ='none'
			hospitalAndUserSections.style.opacity = '100%'
			return {...state, userSectionsArr: newUserSectionsContentArr}

		case 'ADDDATE':
			console.log('ADDDATE')
			const pickDateArr = document.querySelectorAll('.mbsc-selected')
			const addDay = pickDateArr[0].textContent
			const addMonth = pickDateArr[1].textContent
			const addYear = pickDateArr[2].textContent
			let newUserSectionsDateArr = [...state.userSectionsArr]
			newUserSectionsDateArr.push({day:addDay, month: addMonth, year: addYear})
			const addDate = document.querySelector('.addDate')
			addDate.style.display = 'none'
			addContent.style.display = 'block'
			return {...state, userSectionsArr: newUserSectionsDateArr}

		default:
			return {...state}
	}
}