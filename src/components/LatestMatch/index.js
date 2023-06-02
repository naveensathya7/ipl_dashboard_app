// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails

  return (
    <div className="latest-match-bg">
      <div className="match-details">
        <div className="text-section">
          <p className="competing-team">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          className="banner-latest-match"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr />
      <div className="text-section-2">
        <h3>First Innings</h3>
        <p>{firstInnings}</p>
        <h3>Second Innings</h3>
        <p>{secondInnings}</p>
        <h3>Man of The Match</h3>
        <p>{manOfTheMatch}</p>
        <h3>Umpires</h3>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
