import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import AppointmentsModel from "./AppointmentModel";

const AppointmentsNavbar = ({ addAppointment }) => {
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="images/doctor-appointment.jpg"
                alt="doctorAppointment"
                width={"40px"}
                height={"40px"}
                className="align-top headigIcon"
                style={{ borderRadius: "5px", marginRight: "10px" }}
              />
              <span className="appointmentHeading">Doctor Appointment App</span>
            </Typography>
            <Grid container>
              <Grid item>
                <AppointmentsModel addAppointment={addAppointment} />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
};

AppointmentsNavbar.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};

export default AppointmentsNavbar;
