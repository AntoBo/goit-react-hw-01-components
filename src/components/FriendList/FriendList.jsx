import FriendsItem from '../FriendsItem/FriendsItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(friend => (
        <FriendsItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
