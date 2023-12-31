import FriendList from './friendlist/FriendList';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import Transactions from './transactions/TransactionHistory';
import data from '../data/data.json';
import user from '../data/user.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />;
      <Transactions items={transactions} />;
    </>
  );
};
