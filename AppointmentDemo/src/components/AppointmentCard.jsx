import PropTypes from "prop-types";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { BsFillTrashFill } from "react-icons/bs";
import StatusAppointment from "./StatusAppointment";

const AppointmentCard = ({ appointment, onDelete }) => {
  const { id, patientName, age, slot } = appointment;

  const renderSlotIcon = () => {
    switch (slot) {
      case "Morning":
        return <img src="images/morning.png" alt="Morning" width="20px" />;
      case "Afternoon":
        return <img src="images/afternoon.png" alt="Afternoon" width="20px" />;
      case "Evening":
        return <img src="images/evening.png" alt="Evening" width="20px" />;
      default:
        return null;
    }
  };

  return (
    <Card className="card">
      <CardContent>
        <Typography className="StatusAppointment">
          <StatusAppointment />
        </Typography>
        <Typography variant="h6">
          <img src="images/id.svg" alt="ID" />: {id}
        </Typography>
        <Typography variant="body1">
          <img src="images/name.svg" alt="Name" />: {patientName}
        </Typography>
        <Typography variant="body1">
          <img src="images/age.png" alt="Age" width="20px" />: {age}
        </Typography>
        <Typography variant="body1">
          <img src="images/date.svg" alt="Date" />:{" "}
          {appointment.date.toString()}
        </Typography>
        <Typography variant="body1">
          {renderSlotIcon()}: {slot}
        </Typography>
        <Button startIcon={<BsFillTrashFill />} onClick={() => onDelete(id)}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

AppointmentCard.propTypes = {
  appointment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    patientName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    slot: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AppointmentCard;
