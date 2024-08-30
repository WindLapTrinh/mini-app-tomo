import React, { useState, useEffect } from "react";
import { Page } from "zmp-ui";
import { useNavigate, useLocation } from "react-router-dom";
import ListStudents from "./ListStudents";
import  SetTitleHeader  from "../shared/hooks/setTitleHeader";
import "../../css/student/home.css";

const Home = () => {
  SetTitleHeader({
    title: "Danh sách học viên",
  });
  const navigate = useNavigate();
  const location = useLocation();

  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // if (location.state && location.state.phoneNumber) {
    //   // setPhoneNumber(location.state.phoneNumber);

    // } else {
    //   console.error("Phone number not found in location state");
    // }
    setPhoneNumber(84368191416);
  }, [location]);

  const handleItemClick = (student) => {
    const { student_FullName, studentGuid } = student;
    navigate("/home", {
      state: { studentName: student_FullName, studentGuid, phoneNumber },
    });
  };

  return (
    <Page className="page-student">
      <ListStudents
        phoneNumber={phoneNumber}
        onSelectStudent={handleItemClick}
      />
    </Page>
  );
};

export default Home;
