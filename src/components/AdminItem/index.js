import './index.css'

import {MdEdit, MdDelete} from 'react-icons/md'

const AdminItem = props => {
  const {admin, deleteUser} = props

  const onDelete = () => {
    deleteUser(admin.id)
  }
  

  return (
    <li className="item-container">
      <div className="admin-item-container">
        <input className="checkbox-item" type="checkbox" />
        <p className="admin-name">{admin.name}</p>

        <p className="admin-email">{admin.email}</p>
        <p className="admin-role">{admin.role}</p>
        <div className="action-items">
          <MdEdit className = "edit" />
          <MdDelete  className = "delete" 
           key={admin.id}
           onClick={onDelete}
          />
        </div>
      </div>
    </li>
  )
}

export default AdminItem
