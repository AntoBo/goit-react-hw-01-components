import PropTypes from 'prop-types';
import { SpanStyled, LiStyled, ImgStyled, PStyled } from './FriendsItem.sc';

const FriendsItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <LiStyled>
      <SpanStyled isOnline={isOnline}></SpanStyled>
      <ImgStyled src={avatar} alt="User avatar" width="48" />
      <PStyled>{name}</PStyled>
    </LiStyled>
  );
};

FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendsItem;
