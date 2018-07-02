
import React from 'react'

class User extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    let userElement = this.props.user.map((item, index) => <tr key={index}>

      <td>{item.Id}</td>
      <td>{item.Email}</td>
      <td>{item.EmailConfirmed}</td>
      <td>{item.PhoneNumber}</td>
      <td>{item.PhoneNumberConfirmed}</td>
      <td>{item.AccessFailedCount}</td>
      <td>{item.UserName}</td>

    </tr>)
    return (
      <div className='card'>
        <div className='card-header'>
          <h3 className='card-title'>List User</h3>
        </div>
        <div className='card-body'>
          <table className='table table-bordered'>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>EmailConfirmed</th>
              <th>PhoneNuber</th>
              <th>PhoneNumberConfirmed</th>
              <th>AccessFailedCount</th>
              <th>UserName</th>

            </tr>

            {userElement}
          </table>

        </div>
        <button className='btn btn-primary' onClick={this.props.getList}>
          Get
        </button>
      </div>
    )
  }
}
export default User
