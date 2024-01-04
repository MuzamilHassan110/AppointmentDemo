import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  TextField,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  patientName: "",
  age: "",
  date: null,
  slot: "",
};

const validationSchema = Yup.object({
  patientName: Yup.string().min(2).max(25).required("Please enter your name"),
  age: Yup.string().required("Please enter your age"),
  date: Yup.date().required("Please enter the date"),
  slot: Yup.string().required("Please enter the slot"),
});

const AppointmentModal = ({ addAppointment }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onAddAppointment = (values, { resetForm }) => {
    addAppointment(values);
    resetForm();
    handleClose();
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onAddAppointment,
  });

  const handleDateChange = (date) => {
    setFieldValue("date", date);
    setFieldTouched("date", true);
  };

  console.log(errors, touched, "filed is Touched");
  return (
    <>
      <Button
        onClick={() => handleOpen(true)}
        className="newbtn"
        style={{ justifyContent: "space-around" }}
      >
        <img src="images/add.svg" width={"25px"} alt="Add" />
        <Typography variant="h6">&nbsp; New</Typography>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="Box-style">
            <Typography
              id="transition-modal-title"
              variant="h4"
              component="h2"
              className="addPatient"
            >
              Add Patient Details
            </Typography>
            <Typography
              id="transition-modal-description"
              variant="h3"
              sx={{ mt: 2 }}
            >
              <Container className="my-4">
                <Grid>
                  <Grid item xs={12}>
                    <form onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        id="patientName"
                        name="patientName"
                        label="Patient Name"
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.patientName}
                        error={
                          touched.patientName && Boolean(errors.patientName)
                        }
                        helperText={touched.patientName && errors.patientName}
                        margin="normal"
                      />

                      <TextField
                        fullWidth
                        id="age"
                        name="age"
                        label="Age"
                        type="number"
                        variant="outlined"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.age}
                        error={touched.age && Boolean(errors.age)}
                        helperText={touched.age && errors.age}
                        margin="normal"
                      />

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "100%",
                        }}
                      >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            value={values.date}
                            onChange={(date) => handleDateChange(date)}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                variant="outlined"
                                margin="normal"
                              />
                            )}
                            error={touched.date && Boolean(errors.date)}
                            helperText={touched.date && errors.date}
                            label="Date and Time"
                          />
                          {touched.date && errors.date && (
                            <div
                              style={{ fontSize: "15px", color: "red" }}
                              className="text-danger mt-1"
                            >
                              {errors.date}
                            </div>
                          )}
                        </LocalizationProvider>
                      </div>

                      <FormControl fullWidth variant="outlined" margin="normal">
                        <InputLabel id="slot-label">Slot</InputLabel>
                        <Select
                          labelId="slot-label"
                          id="slot"
                          name="slot"
                          value={values.slot}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.slot && Boolean(errors.slot)}
                          label="Slot"
                        >
                          <MenuItem value="">Select a slot</MenuItem>
                          <MenuItem value="Morning">Morning</MenuItem>
                          <MenuItem value="Afternoon">Afternoon</MenuItem>
                          <MenuItem value="Evening">Evening</MenuItem>
                        </Select>
                        {touched.slot && errors.slot && (
                          <div
                            style={{ fontSize: "15px", color: "red" }}
                            className="text-danger mt-1"
                          >
                            {errors.slot}
                          </div>
                        )}
                      </FormControl>

                      <div style={{ textAlign: "center", marginTop: "1rem" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          className="submit"
                        >
                          Submit
                        </Button>
                      </div>
                    </form>
                  </Grid>
                </Grid>
              </Container>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

AppointmentModal.propTypes = {
  addAppointment: PropTypes.func.isRequired,
};

export default AppointmentModal;
