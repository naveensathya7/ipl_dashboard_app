// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImgUrl, teamName} = teamDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-item">
        <img className="team-logo" src={teamImgUrl} alt={teamName} />
        <h1 className="team-name">{teamName}</h1>
      </li>
    </Link>
  )
}
export default TeamCard
