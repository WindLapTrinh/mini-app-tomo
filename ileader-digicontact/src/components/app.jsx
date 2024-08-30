import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { RecoilRoot } from "recoil";

import Login from "../pages/login/Home.jsx";
import Students from "../pages/students/Home.jsx";
import DetailHome from "../pages/home/Home.jsx";
import Infomation from "../pages/shared/pages/Infomation.jsx";
import TuitionFees from "../pages/accountant/Home.jsx";
import Register from "../pages/registrationform/Home.jsx";
import TranScript from "../pages/transcript/Home.jsx";
import RollCall from "../pages/rollcall/Home.jsx";
import TimeTable from "../pages/timetable/Home.jsx";

import HomeNotify from "../pages/notify/Home.jsx";
import DetailBranch from "../pages/DetailBranch.jsx";
import FillterStudent from "../pages/FillterStudent.jsx";
import RouterStudent from "../pages/RouterStudent.jsx";
import Survey from "../pages/Survey.jsx";
import DetailSurvey from "../pages/DetailSurvey.jsx";
import "../pages/shared/styles/app.css"
const MyApp = () => {
  const [tasks, setTasks] = useState([]);
 
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              {/* <Route path="/" element={<Infomation></Infomation>}></Route> */}

               {/* <Route path="/" element={<Login></Login>}></Route> */}
              <Route path="/" element={<Students />} /> 
              <Route path="/home" element={<DetailHome setTasks={setTasks} tasks={tasks} />} />
               {/* <Route path="/students" element={<Students />} />  */}
              
    
              <Route path="/notify" element={<HomeNotify setTasks={setTasks} tasks={tasks} />}/>
              <Route path="/register" element={<Register setTasks={setTasks} tasks={tasks} />} />
              <Route path="/transcript" element={<TranScript setTasks={setTasks} tasks={tasks} />} />
              <Route path="/rollcall" element={<RollCall setTasks={setTasks} tasks={tasks} />} />
              <Route path="/timetable" element={<TimeTable setTasks={setTasks} tasks={tasks} />} />
              <Route path="/tuitionFees" element={<TuitionFees setTasks={setTasks} tasks={tasks} />} />


              <Route path="/detailbranch" element={<DetailBranch setTasks={setTasks} tasks={tasks} />} />
              <Route path="/fillterstudent" element={<FillterStudent setTasks={setTasks} tasks={tasks} />} />
              <Route path="/routerstudent" element={<RouterStudent setTasks={setTasks} tasks={tasks} />} />
              <Route path="/survey" element={<Survey setTasks={setTasks} tasks={tasks} />} />
              <Route path="/detailsurvey" element={<DetailSurvey setTasks={setTasks} tasks={tasks} />} />

            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
