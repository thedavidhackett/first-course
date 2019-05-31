import {connect} from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => {
    return { user: state.user }
};

const ProfilePage = connect(mapStateToProps)(Profile);

export default ProfilePage;
