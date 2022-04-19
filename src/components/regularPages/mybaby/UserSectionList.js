import {connect} from 'react-redux';
import UserSection from './UserSection'

const UserSectionList = ({userSectionsArr}) => {
	console.log(userSectionsArr)

	const userSectionListArr = [
		{
			header: 'שיעור יוגה ראשון',
			description: 'בלוטוס באר שבע',
			img: 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		},
		{
			header: 'שיעור יוגה ראשון',
			description: 'בלוטוס באר שבע',
			img: 'https://yogabykarina.com/wp-content/uploads/2019/12/Pregnancy-yoga-poses-strengthen-core.jpg'
		},
	]

	return (
		<div className='userSectionList'>
			{
				userSectionsArr.map((el, i) => {
					return (
						<UserSection 
							img={el.img}
							header={el.header} 
							description={el.description} 
						/> 
					)
				})
			}
		</div>
	)
}

const mapStateToProps = (state) => {
  return {
    userSectionsArr: state.userSectionsArr,
  }
}

export default connect(mapStateToProps)(UserSectionList) 
