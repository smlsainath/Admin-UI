import './index.css'

const AdminItem = props => {
  const {admin} = props

  return (
    <li className="item-container">
      <div className="logo-and-title-container">
        <p className="currency-name">{admin.name}</p>

        <p className="currency-value">{admin.email}</p>
        <p className="currency-value">{admin.role}</p>
      </div>
    </li>
  )
}

export default AdminItem
