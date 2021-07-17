import {Component} from 'react'

import Header from '../Header'

import './index.css'

const apiUrl =
  'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'

class Admin extends Component {
  state = {
    adminData: [],
  }

  componentDidMount() {
    this.getAdminData()
  }

  setAdminData = fetchedData => {
    this.setState({
      adminData: fetchedData.map(eachAdminData => ({
        id: eachAdminData.id,
        name: eachAdminData.name,
        email: eachAdminData.email,
        role: eachAdminData.role,
      })),
    })
  }

  getAdminData = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()
    this.setAdminData(fetchedData, false)
  }

  renderAdminDataList = () => {
    const {adminData} = this.state

    return <Header adminData={adminData} />
  }

  render() {
    return <div className="app-container">{this.renderAdminDataList()}</div>
  }
}

export default Admin
