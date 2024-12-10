import { DataGrid } from "@mui/x-data-grid";
import '../App.css';

function CalendarGrid() {
  const columns = [
    { field: "Time", headerName: "", width: 150 },
    { field: "Monday", headerName: "M", width: 150 },
    { field: "Tuesday", headerName: "Tu", width: 150 },
    { field: "Wednesday", headerName: "W", width: 150 },
    { field: "Thursday", headerName: "Th", width: 150 },
    { field: "Friday", headerName: "F", width: 150 },
    { field: "Saturday", headerName: "Sa", width: 150 },
    { field: "Sunday", headerName: "Su", width: 150 },
  ];

  const rows = [
    { id: 1, Time: "12:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 2, Time: "1:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 3, Time: "2:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 4, Time: "3:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 5, Time: "4:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 6, Time: "5:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 7, Time: "6:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 8, Time: "7:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 9, Time: "8:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 10, Time: "9:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 11, Time: "10:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 12, Time: "11:00 AM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 13, Time: "12:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 14, Time: "1:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 15, Time: "2:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 16, Time: "3:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 17, Time: "4:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 18, Time: "5:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 19, Time: "6:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 20, Time: "7:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 21, Time: "8:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 22, Time: "9:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 23, Time: "10:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
    { id: 24, Time: "11:00 PM", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sunday: "" },
  ];

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
      pagination
        rows={rows}
        columns={columns}
        pageSizeOptions={[24]}
      />
    </div>
  );
}

export default CalendarGrid;
