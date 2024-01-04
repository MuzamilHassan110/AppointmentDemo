import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MdOutlinePadding } from "react-icons/md";

import { CiWarning } from "react-icons/ci";

import { MdOutlineCancelPresentation } from "react-icons/md";

const StatusAppointment = () => {
  const [status, setStatus] = useState("Pending");

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  let iconToRender = null;

  switch (status) {
    case "Pending":
      iconToRender = (
        <MdOutlinePadding
          className="statusIcon"
          style={{ color: "rgb(98, 246, 172)" }}
        />
      );
      break;
    case "Success":
      iconToRender = (
        <CiWarning
          className="statusIcon"
          style={{ color: "rgb(225, 255, 123)" }}
        />
      );
      break;
    case "Warning":
      iconToRender = (
        <MdOutlineCancelPresentation
          className="statusIcon"
          style={{ color: "rgb(220, 40, 40)" }}
        />
      );
      break;
    default:
      iconToRender = null;
  }

  return (
    <Box>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label" className="statusLabel">
          Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={handleStatus}
        >
          <MenuItem
            value="Pending"
            style={{ backgroundColor: "rgb(98, 246, 172)" }}
          >
            Pending
          </MenuItem>
          <MenuItem
            value="Success"
            style={{ backgroundColor: "rgb(225, 240, 123)" }}
          >
            Success
          </MenuItem>
          <MenuItem
            value="Warning"
            style={{ backgroundColor: "rgb(220, 40, 40)" }}
          >
            Warning
          </MenuItem>
        </Select>
      </FormControl>

      {iconToRender && <div>{iconToRender}</div>}
    </Box>
  );
};

export default StatusAppointment;
