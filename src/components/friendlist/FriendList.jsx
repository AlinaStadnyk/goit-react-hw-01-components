import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';
const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};
export default FriendList;
