import css from './FriendList.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {isOnline === false ? (
        <span className={css.status} style={{ backgroundColor: 'red' }}></span>
      ) : (
        <span
          className={css.status}
          style={{ backgroundColor: 'green' }}
        ></span>
      )}
      <span className={css.statu}>{isOnline}</span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;
