import friends from './friends.json'
console.log(friends)
const Friends = ({avatar, name, isOnline, ids}) =>{
    return friends.map((el) => (


        <ul className="friend-list" key={el.id}>
  <li className="item" >
            <span className="status">{el.isOnline}</span>
  <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
            <p className="name">{el.name}</p>
</li>
</ul>
  
))

}
export default Friends