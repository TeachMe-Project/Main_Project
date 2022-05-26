import Button from "../Button/Button";

export const UpcomingPaymentCard = () => {
    return (
        <div className="Parent-upcomingPayments-item">
            <p className="subjectName">Mathematics</p>
            <p>Mr. Kamal Maggona</p>
            <p>Tuesdays, 04:00pm - 06:00pm</p>
            <Button>Pay now</Button>
        </div>
    );
};
export default UpcomingPaymentCard;