
import css from './FriendList.module.css'
const FriendList = ({friends}) =>{
    return (
        <ul className={css.list} >
            {
              friends.map((el) => (


 
  <li className={css.item} key={el.id}>
            <span className={css.statu} >{el.isOnline}</span>
  <img className={css.avatar} src={el.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{el.name}</p>
</li>


))
  
            }
</ul>
    )
}
export default FriendList