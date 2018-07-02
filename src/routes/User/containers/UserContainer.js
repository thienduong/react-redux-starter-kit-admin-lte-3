import { getList } from '../modules/user'
import { connect } from 'react-redux'
import User from '../components/User'

const mapDispatchToProps = {
  getList : () => getList()
}

const mapStateToProps = (state) => {
  console.log('category state: ', state);
  // return {
  //   categories : state.category.categories,
  //   state: state.category.state
  // };

  return {
    user : state.user.users
  }
  // return state.category;
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
