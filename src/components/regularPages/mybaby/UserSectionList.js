import {connect} from 'react-redux';
import UserSection from './UserSection'

const UserSectionList = ({userSectionsArr}) => {
	console.log(userSectionsArr)

	return (
		<div className='userSectionList'>
			{
				userSectionsArr.map((el, i) => {
					return (
						<UserSection 
							day={el.day}
							month={el.month}
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
