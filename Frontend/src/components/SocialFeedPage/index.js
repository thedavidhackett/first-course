import {connect} from 'react-redux';
import SocialFeed from './SocialFeed';

const mapStateToProps = state => {
    return { posts: state.posts }
};

const SocialFeedPage = connect(mapStateToProps)(SocialFeed);


export default SocialFeedPage;
