import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";

const CalendarComponent = () => {
    const [dateInicio, setDateInicio] = useState(new Date('December 17, 1995 03:24:00'));

    const establecerLimitesInicio = (event: any) => {
        setDateInicio(event.value);
    };

    return (
        <Calendar
            name="Fecha"
            showIcon
            dateFormat="dd/mm/yy"
            placeholder="DD/MM/YYYY"
            value={dateInicio}
            onChange={establecerLimitesInicio}
        ></Calendar>
    );
};

export default CalendarComponent;
