import "./App.css";
import { useState } from "react";
import { AppointmentsStaticList } from "./AppointmentsStaticList";
import AppointmentsPatientList from "./components/AppointmentPatientList";
import AppointmentsChart from "./components/AppointmentChart";
import AppointmentsNavbar from "./components/AppointmentNavbar";

function App() {
  const [appointments, setAppointments] = useState(AppointmentsStaticList);

  const addAppointment = (newAppointment) => {
    setAppointments([
      ...appointments,
      { ...newAppointment, id: appointments.length + 1 },
    ]);
  };

  return (
    <div className="bg">
      <AppointmentsNavbar addAppointment={addAppointment} />
      <AppointmentsChart appointments={appointments} />
      <AppointmentsPatientList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </div>
  );
}

export default App;
import { MdOutlinePadding } from "react-icons/md";
<MdOutlinePadding />;
import { CiWarning } from "react-icons/ci";
<CiWarning />;
import { MdOutlineCancelPresentation } from "react-icons/md";
<MdOutlineCancelPresentation />;
