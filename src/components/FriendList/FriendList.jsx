import { SpanStyled } from './FriendList.sc';
import PropTypes from 'prop-types';
import s from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={s.item}>
          <SpanStyled isOnline={isOnline} className={s.status}></SpanStyled>
          <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={s.name}>{name}</p>
        </li>
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
