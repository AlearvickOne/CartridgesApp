import { FormDataNamingOrderClass } from "@/constants/constants";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { memo } from "react";

export const DateCreateOrderForm = memo(() => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        name={FormDataNamingOrderClass.NAME_DATE_ORIGIN_ORDER}
        format={"                  DD.MM.YYYY"}
        defaultValue={dayjs()}
        maxDate={dayjs()}
      />
    </LocalizationProvider>
  );
});
