import {Component} from 'react'

import AdminItem from '../AdminItem'

import './index.css'

class Header extends Component {
  renderHeader = () => (
    <div className="list-header">
      <p className="list-heading">Name</p>

      <p className="list-heading">Email</p>
      <p className="list-heading">Role</p>
      <p className="list-heading">Actions</p>
    </div>
  )

  renderAdmin = () => {
    const {adminData} = this.props

    return (
      <div className="admin-list">
        {this.renderHeader()}
        <ul className="list-body">
          {adminData.map(eachAdminData => (
            <AdminItem key={eachAdminData.id} admin={eachAdminData} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return <div className="admin-container">{this.renderAdmin()}</div>
  }
}

export default Header
