export const initState = {
	userSectionsArr: [
		// {
		// 	header: 'שיעור יאשון',
		// 	description: 'בלוטוס באר שבע',
		// 	img: 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		// },
		// {
		// 	header: 'שיעור יוגה ראשון',
		// 	description: 'בלוטוס באר שבע',
		// 	img: 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		// },
	]
}

export const reducer = (state=initState, action={}) => {
	switch(action.type) {
		case 'ADD':
		console.log('addReducer')
		const addHeader = document.querySelector('.addHeader').value
		const addDescription = document.querySelector('.addDescription').value
		const addImg = 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		console.log(addHeader)
		console.log(state)
		let newUserSectionsArr = [...state.userSectionsArr]
		newUserSectionsArr.push({header:addHeader, description: addDescription, img: addImg})
		const add = document.querySelector('.add')
		const hospitalAndUserSections = document.querySelector('.hospitalAndUserSections')
		add.style.display ='none'
		hospitalAndUserSections.style.opacity = '100%'
			return {...state, userSectionsArr: newUserSectionsArr}
		default:
			return {...state}
	}
}