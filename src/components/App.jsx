import Friends from "./friendlist/FriendList";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import Transactions from "./transactions/TransactionHistory";


export const App = () => {
  return (
    <>
    <Profile />
      <Statistics />
      <Friends />
      <Transactions/>

    </>
  );
};
