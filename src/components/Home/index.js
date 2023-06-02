// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsDetails()
  }

  getTeamsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(each => ({
      id: each.id,
      teamName: each.name,
      teamImgUrl: each.team_image_url,
    }))

    // console.log(updatedData)
    this.setState({teamsList: updatedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    console.log(teamsList)
    return (
      <div className="bg-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="logo-container">
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="teams-list">
              {teamsList.map(each => (
                <TeamCard key={each.id} teamDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Home
