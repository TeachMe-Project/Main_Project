import TransactionsCard from "./TransactionsCard";

export const TransactionsContent = () => {
    return (
        <div className='Parent-transactions-content'>
            <TransactionsCard></TransactionsCard>
            <TransactionsCard></TransactionsCard>
            <TransactionsCard></TransactionsCard>
            <TransactionsCard></TransactionsCard>
            <TransactionsCard></TransactionsCard>
        </div>
    );
};

export default TransactionsContent;
