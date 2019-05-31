import {connect} from 'react-redux';
import JobsFeed from './JobsFeed';

const mapStateToProps = state => {
    return { jobs: state.jobs }
};

const JobsFeedPage = connect(mapStateToProps)(JobsFeed);


export default JobsFeedPage;
