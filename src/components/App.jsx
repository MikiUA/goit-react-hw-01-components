import FriendListWrapper from "./friendList/FriendListWrapper";
import ProfileWrapper from "./profile/ProfileWrapper";
import StatisticsWrapper from "./statistics/StatisticsWrapper";
import TransactionsWrapper from "./transactionHistory/TransactionsWrapper";

export const App = () => {
  return (
    <div className="task-box"  >
      <ProfileWrapper/> 
      <StatisticsWrapper/>
      <FriendListWrapper/>
      <TransactionsWrapper/>
    </div>
  );
};
