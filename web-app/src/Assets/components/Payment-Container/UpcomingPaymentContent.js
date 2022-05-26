import UpcomingPaymentCard from "./UpcomingPaymentCard";

export const UpcomingPaymentContent = () => {
    return (
        <div className='Parent-upcomingPayments-content'>
            <UpcomingPaymentCard></UpcomingPaymentCard>
            <UpcomingPaymentCard></UpcomingPaymentCard>
            <UpcomingPaymentCard></UpcomingPaymentCard>
            <UpcomingPaymentCard></UpcomingPaymentCard>
        </div>
    );
};

export default UpcomingPaymentContent;