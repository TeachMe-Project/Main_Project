import TransactionsContent from "./TransactionsContent";
import UpcomingPaymentContent from "./UpcomingPaymentContent";

export const ParentPayment = () => {
    return (
        <div className='Parent-payment'>
            <div className='Parent-upcomingPayments'>
                <h1>Upcoming Payments</h1>
                <UpcomingPaymentContent></UpcomingPaymentContent>
            </div>
            <div className='Parent-transactions'>
                <h1>Transactions</h1>
                <TransactionsContent></TransactionsContent>
            </div>
        </div>
    )
};

export default ParentPayment;
