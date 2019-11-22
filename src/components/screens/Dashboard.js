import React from "react";
import "./Dashboard.css";
import {
  MdReorder,
  MdDashboard,
  MdAssignmentInd,
  MdAccessAlarms,
  MdFileUpload,
  MdChatBubbleOutline
} from "react-icons/md";
import { IoIosPersonAdd, IoIosTrendingUp } from "react-icons/io";
import { GoLightBulb } from "react-icons/go";
import { AiOutlineMail, AiOutlinePoweroff } from "react-icons/ai";
import { FaFileAlt, FaRegMap, FaSlidersH } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Chart from "../Charts/Pie/Chart";
import PolarAre from "../Charts/PolarAre";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import Calenda from "../Scheduled/calendar/Calenda";
import Team from "../Scheduled/Team/Team";
import TodoList from "../Scheduled/TodoList/TodoList";
import ScheduledMettings from "../Scheduled/ScheduledMettings/ScheduledMettings";
import Activity from "../Scheduled/Activity/Activity";
function Dashboard() {
  return (
    <div className="main">
      <div className="first-row">
        <div className="three-line-icon-dev">
          <MdReorder className="three-line-icon" />
        </div>
        <div className="profile-image">
          <img
            className="image"
            src={require("../img/background.png")}
            alt="Logo"
          />
        </div>
        <div className="profile-description">
          <p className="profile-name ">Nethan Taylor</p>
          <p className="profile-status">Senior Financial Adviser</p>
        </div>
        {
          //horizontal icon
        }
        <div className="horizotal-line"></div>
        <div className="topics">
          <p className="topic">GENERAL</p>
        </div>
        <div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button">
              <MdDashboard className="button-icon" />
              <p className="title">Dashboard</p>
            </button>
          </div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button">
              <IoIosPersonAdd className="button-icon" />
              <p className="title">Clients</p>
            </button>
          </div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button" style={{ marginBottom: 50 }}>
              <MdAssignmentInd className="button-icon" />
              <p className="title">Leads</p>
            </button>
          </div>
        </div>
        {
          // **********Element/**************************************************
        }

        <div className="topics">
          <p className="topic">ELEMENTS</p>
        </div>
        <div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button">
              <MdAccessAlarms className="button-icon" />
              <p className="title">Tasks</p>
            </button>
          </div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button">
              <GoLightBulb className="button-icon" />
              <p className="title">Insights</p>
            </button>
          </div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button">
              <IoIosTrendingUp className="button-icon" />
              <p className="title">Modeling</p>
            </button>
          </div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button">
              <FaFileAlt className="button-icon" />
              <p className="title">Templates</p>
            </button>
          </div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button" style={{ marginBottom: 50 }}>
              <MdFileUpload className="button-icon" />
              <p className="title">Uploads</p>
            </button>
          </div>
        </div>
        {
          // **********NOTIFICATION/**************************************************
        }
        <div className="topics">
          <p className="topic">NOTIFICATION</p>
        </div>
        <div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button">
              <AiOutlineMail className="button-icon" />
              <p className="title">Email</p>
            </button>
          </div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button" style={{ marginBottom: 50 }}>
              <MdChatBubbleOutline className="button-icon" />
              <p className="title">Chat</p>
            </button>
          </div>
        </div>
        {
          //************************* */
        }
        {
          // **********EXTRAS/**************************************************
        }
        <div className="topics">
          <p className="topic">EXTRAS</p>
        </div>
        <div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button" style={{ marginBottom: 100 }}>
              <FaRegMap className="button-icon" />
              <p className="title">Maps</p>
            </button>
          </div>
          <div>
            {
              // ======Button
            }
            <button className="nav-button" style={{ marginBottom: 100 }}>
              <FaSlidersH className="button-icon" />
              <p className="title">Maps</p>
            </button>
          </div>
        </div>
        {
          //************************* */
        }
        {
          //horizontal icon
        }
        <div className="horizotal-line"></div>

        <div>
          {
            // ======Button
          }
          <button className="nav-button" style={{ marginBottom: 100 }}>
            <AiOutlinePoweroff className="button-icon" />
            <p className="title">Settings</p>
          </button>
        </div>
      </div>

      <div className="row2">
        <div className="main-search-area">
          <div className="harmonee">
            <div className="harmonee-icon">
              <GiHummingbird className="harmonee-btn-icon" />
              <h2 className="harmonee-text">harmonee</h2>
            </div>
          </div>
          <div className="search-area">
            <input type="text" placeholder="loka" />
          </div>

          <h1>loka</h1>
        </div>

        {
          //********2nd row ***** */
        }
        <div className="second-row">
          <div className="row3">
            <div className="row-1">
              <div className="doughnut">
                <Chart />
              </div>
              <div className="radar">
                <PolarAre />
              </div>
            </div>
            <div className="row-1">
              <div className="doughnut">
                <Chart />
              </div>
              <div className="radar">
                <PolarAre />
              </div>
            </div>
            <div className="row-2">
              <div className="bar-chart">
                <BarChart />
              </div>
            </div>
            <div className="row-3">
              <div className="bar-chart">
                <LineChart />
              </div>
            </div>
            <div className="row-4"></div>
            <div className="row-5"></div>
          </div>
          {
            //********3 rd row*******
          }
          <div className="row4">
            <div className="row-11">
              <Calenda />
            </div>
            <div className="row-22">
              <Team />
            </div>
            <div className="row-33">
              <TodoList />
            </div>
            <div className="row-44">
              <ScheduledMettings />
            </div>
            <div className="row-55">
              <Activity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
