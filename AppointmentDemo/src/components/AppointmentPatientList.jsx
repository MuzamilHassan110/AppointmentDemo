import PropTypes from "prop-types";
import AppointmentCard from "./AppointmentCard";
import { List, ListItem, Typography } from "@material-ui/core";

const AppointmentsPatientList = ({ appointments, setAppointments }) => {
  const handleDelete = (id) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(updatedAppointments);
  };
  return (
    <div>
      {appointments.length === 0 ? (
        <Typography variant="body1">No appointments available.</Typography>
      ) : (
        <List>
          {appointments.map((appointment, index) => (
            <ListItem key={index}>
              <AppointmentCard
                appointment={appointment}
                onDelete={handleDelete}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

AppointmentsPatientList.propTypes = {
  appointments: PropTypes.array.isRequired,
  setAppointments: PropTypes.func.isRequired,
};

export default AppointmentsPatientList;
