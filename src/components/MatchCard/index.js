// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  let wonOrLossText

  if (matchStatus === 'Won') {
    wonOrLossText = 'wonText'
  } else {
    wonOrLossText = 'lossText'
  }

  return (
    <li className="list-item">
      <img
        className="team-sm-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`${wonOrLossText}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
