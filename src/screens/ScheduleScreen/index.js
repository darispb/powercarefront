import { useState } from "react";
import "./ScheduleScreen.css";

export default function ScheduleScreen() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [doctor, setDoctor] = useState();
  const timeList = [
    "08:30 - 09:00",
    "09:00 - 09:30",
    "09:30 - 10:00",
    "10:00 - 10:30",
    "10:30 - 11:00",
    "11:00 - 11:30",
    "11:30 - 12:00",
    "13:30 - 14:00",
    "14:00 - 14:30",
    "14:30 - 15:00",
    "15:00 - 15:00",
  ];
  // Input Component
  function InputSchedule({ title, children }) {
    return (
      <div className="input-schedule">
        <p>{title}</p>
        <div className="input-schedule-content">{children}</div>
      </div>
    );
  }

  // แปลง Date
  const d = new Date(date);
  const thaiDate = d.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  function submit() {
    if (time && date && doctor) {
      // กดปุ่มยืนยัน
      console.log({ time, date, doctor });
    }
  }
  // style when time-item active
  const styleActive = { backgroundColor: "#7e99b8", color: "white" };

  return (
    <div className="content-body">
      <h2>จัดการตารางเวลา</h2>
      {/* Input Doctor */}
      <div className="schedule-content">
        <InputSchedule title="เลือกหมอ" invalid>
          <select
            value={doctor}
            name="doctor-select"
            className="doctor-select"
            onChange={(e) => setDoctor(e.target.value)}
          >
            <option disabled selected>
              เลือกหมอ...
            </option>
            {doctorList.map((item, key) => (
              <option key={key} value={item}>
                {item}
              </option>
            ))}
          </select>
          <h3 style={{ position: "absolute", right: "3rem", top: "3.2rem" }}>
            ▼
          </h3>
        </InputSchedule>

        {/* Input Date */}
        <InputSchedule title="เลือกวันที่">
          <input
            type="date"
            className="date-picker"
            value={date || null}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </InputSchedule>

        {/* Input Time */}
        {date ? (
          <InputSchedule title="เลือกเวลา">
            <div className="time-picker">
              <p>คุณเลือก {thaiDate}</p>
              <div className="time-picker-content">
                {timeList.map((item, key) => (
                  <span
                    key={key}
                    className="time-item"
                    style={time === item ? styleActive : null}
                    onClick={() => setTime(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <span className="button-submit" onClick={submit}>
              ยืนยัน
            </span>
          </InputSchedule>
        ) : null}
      </div>
    </div>
  );
}

//////////////////////// Mockup Data //////
const doctorList = ["หมอ A", "หมอ B", "หมอ C", "หมอ D", "หมอ E", "หมอ F"];
