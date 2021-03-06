import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchMeetings} from '../actions/meetings'

class History extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.dispatch(fetchMeetings())
  }

  render(){
    const meetings = this.props.meetings.meetings
    return (
      <div className="container">
        <h2 className="title is-2">Meeting history</h2>
        <div className="columns">
          <div className="column is-6">
          <h1 className="title is-2">Past Meetings</h1>
            <ul>
            {meetings.map(meeting => (
              <li><Link key={meeting.id} to={`/meeting/${meeting.id}`}>{meeting.meeting_name}</Link></li>
            ))}
            </ul>
          </div>
          <div className="column is-6">
            <img src="/meetingImage.jpeg" />
            <Link className="button is-large is-fullwidth is-success" to="/meeting">Create New Meeting</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({meetings}) => {
  return {
    meetings
  }
}

export default connect(mapStateToProps)(History)
