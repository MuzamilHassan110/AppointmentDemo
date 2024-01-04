import ReactApexChart from "react-apexcharts";
import { Container, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const AppointmentsChart = ({ appointments }) => {
  const countTimeSlots = (appointments) => {
    const timeSlotCount = {
      Morning: 0,
      Afternoon: 0,
      Evening: 0,
    };

    appointments.forEach((appointment) => {
      timeSlotCount[appointment.slot]++;
    });

    return ["Morning", "Afternoon", "Evening"].map(
      (slot) => timeSlotCount[slot]
    );
  };

  const chartOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Morning", "Afternoon", "Evening"],
  };

  return (
    <div className="chart">
      <Container>
        <Typography variant="h5" gutterBottom>
          Detailed Chart Slots Wise
        </Typography>
        <ReactApexChart
          options={chartOptions}
          series={countTimeSlots(appointments)}
          type="pie"
          height={350}
        />
      </Container>
    </div>
  );
};

AppointmentsChart.propTypes = {
  appointments: PropTypes.array.isRequired,
};

export default AppointmentsChart;
