import { getList } from '../modules/user'
import { connect } from 'react-redux'
import User from '../components/User'

const mapDispatchToProps = {
  getList : () => getList()
}

const mapStateToProps = (state) => {
  return {
    user : state.user.users
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(User)
