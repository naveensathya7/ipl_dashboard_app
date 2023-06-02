// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'
import NotFound from '../NotFound'

class TeamMatches extends Component {
  state = {
    recentMatchesList: [],
    latestMatch: {},
    teamBanner: '',
    isLoading: true,
    isNotFound: false,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const teams = ['KKR', 'RCB', 'CSK', 'RR', 'MI', 'KXIP', 'DC', 'SRH']

    if (teams.includes(id)) {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

      const data = await response.json()

      const updatedData = {
        latestMatchDetails: data.latest_match_details,
        recentMatches: data.recent_matches,
        teamBannerUrl: data.team_banner_url,
      }
      const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedData
      const formattedLatestMatch = {
        competingTeam: latestMatchDetails.competing_team,
        competingTeamLogo: latestMatchDetails.competing_team_logo,
        date: latestMatchDetails.date,
        firstInnings: latestMatchDetails.first_innings,
        id: latestMatchDetails.id,
        manOfTheMatch: latestMatchDetails.man_of_the_match,
        matchStatus: latestMatchDetails.match_status,
        result: latestMatchDetails.result,
        secondInnings: latestMatchDetails.second_innings,
        umpires: latestMatchDetails.umpires,
        venue: latestMatchDetails.venue,
      }
      const formattedRecentMatches = recentMatches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      }))

      this.setState({
        latestMatch: formattedLatestMatch,
        recentMatchesList: formattedRecentMatches,
        teamBanner: teamBannerUrl,
        isLoading: false,
        isNotFound: false,
      })
    } else {
      this.setState({isNotFound: true, isLoading: false})
    }
  }

  getContent = () => {
    const {latestMatch, recentMatchesList, teamBanner, isNotFound} = this.state

    if (isNotFound) {
      return (
        <div>
          <NotFound />
        </div>
      )
    }
    return (
      <div className="team-container">
        <img className="banner-image" src={teamBanner} alt="team banner" />
        <h3 className="heading1">Latest Matches</h3>
        <LatestMatch key={latestMatch.id} matchDetails={latestMatch} />
        <ul className="recent-matches-list">
          {recentMatchesList.map(each => (
            <MatchCard key={each.id} matchDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {
      latestMatch,
      recentMatchesList,
      teamBanner,
      isLoading,
      isNotFound,
    } = this.state
    console.log(recentMatchesList, latestMatch, teamBanner)
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.getContent()
        )}
      </div>
    )
  }
}
export default TeamMatches
