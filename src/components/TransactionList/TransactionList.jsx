// import './TransactionList.css';

const TransactionList = () => {
  return (
    <div className="transaction-list">
      <div className="transaction-list-header">
        <h3>Transactions</h3>
        <div className="transaction-filters">
          {/* Filter controls will go here */}
        </div>
      </div>
      <div className="transaction-table">
        {/* Transaction table will go here */}
      </div>
    </div>
  );
};

export default TransactionList;
