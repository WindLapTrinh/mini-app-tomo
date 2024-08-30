import React, { useState, useEffect, useRef } from "react";
import {
  Page,
  List,
  Icon,
  Modal,
  Swiper,
  Text,
  Box,
  Button,
  BottomNavigation,
  Sheet,
  useTheme,
} from "zmp-ui";
import { configAppView } from "zmp-sdk/apis";
import "../css/detailBranch.css";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useLocation } from "react-router-dom";

const DetailBranch = (props) => {
  const [activeTab, setActiveTab] = useState("chat");
  const location = useLocation();
  const { studentName, studentGuid } = location.state || {};

  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [vDialogVisible, setVDialogVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [actionSheetAcount, setActionSheetAcount] = useState(false);
  const [totalEvents, setTotalEvents] = useState(0);
  const [totalAccountTants, setTotalAccountTants] = useState(0);
  const [totalAcademics, setTotalAcademics] = useState(0);
  const [totalRegisters, setTotalRegisters] = useState(0);
  const [totalTuitions, setTotalTuitions] = useState(0);
  const [totalSchedules, setTotalSchedules] = useState(0);
  const [totalTranscripts, setTotalTranscripts] = useState(0);
  const [totalAttendances, setTotalAttendances] = useState(0);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    configAppView({
      headerColor: "#8861bb",
      statusBarColor: "#8861bb",
      headerTextColor: "white",
      hideAndroidBottomNavigationBar: true,
      hideIOSSafeAreaBottom: true,
      actionBar: {
        title: "Chi tiết chi nhánh",
        leftButton: "back",
      },
      success: (res) => {
        console.log("Goi thanh cong");
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }, []);

  //Address
  const address =
    "296/3 Nơ Trang Long, Phường 12, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam";
  const apiKey =
    "!1m18!1m12!1m3!1d3918.9277940087895!2d106.69579307451765!3d10.816837758448077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ec98ac59ef%3A0xe55a4f47c7711739!2zMjk2LzMgTsahIFRyYW5nIExvbmcsIFBoxrDhu51uZyAxMiwgQsOsbmggVGjhuqFuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1704776219799!5m2!1svi!2s";

  //Count Notice SK
  useEffect(() => {
    const fetchEnVent = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/CountNotSeenEvent?guidStudent=${studentGuid}`
        );
        const eventData = response.data.data;
        // Kiểm tra xem eventData có phải là một số không
        if (typeof eventData === "number") {
          // Cập nhật state với tổng số sự kiện
          setTotalEvents(eventData);
        } else {
          console.error("Dữ liệu sự kiện không hợp lệ:", eventData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };
    fetchEnVent();
  }, [studentGuid]);

  //Count accountant
  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/CountNotSeenAccounting?guidStudent=${studentGuid}`
        );
        const accountData = response.data.data;
        // Kiểm tra xem eventData có phải là một số không
        if (typeof accountData === "number") {
          // Cập nhật state với tổng số sự kiện
          setTotalAccountTants(accountData);
        } else {
          console.error("Dữ liệu sự kiện không hợp lệ:", accountData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };
    fetchAccount();
  }, [studentGuid]);

  //Count Academic
  useEffect(() => {
    const fetchAcademic = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/CountNotSeenEducation?guidStudent=${studentGuid}`
        );
        const academicData = response.data.data;
        // Kiểm tra xem eventData có phải là một số không
        if (typeof academicData === "number") {
          // Cập nhật state với tổng số sự kiện
          setTotalAcademics(academicData);
        } else {
          console.error("Dữ liệu sự kiện không hợp lệ:", academicData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };
    fetchAcademic();
  }, [studentGuid]);

  //Count CountNotSeenRegister
  useEffect(() => {
    const fetchRegister = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/CountNotSeenRegister?guidStudent=${studentGuid}`
        );
        const regData = response.data.data;
        // Kiểm tra xem eventData có phải là một số không
        if (typeof regData === "number") {
          // Cập nhật state với tổng số sự kiện
          setTotalRegisters(regData);
        } else {
          console.error("Dữ liệu sự kiện không hợp lệ:", regData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };
    fetchRegister();
  }, [studentGuid]);

  //Count Tuition
  useEffect(() => {
    const fetchTuition = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/CountNotSeenTuition?guidStudent=${studentGuid}`
        );
        const tuitionData = response.data.data;
        // Kiểm tra xem eventData có phải là một số không
        if (typeof tuitionData === "number") {
          // Cập nhật state với tổng số sự kiện
          setTotalTuitions(tuitionData);
        } else {
          console.error("Dữ liệu sự kiện không hợp lệ:", tuitionData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };
    fetchTuition();
  }, [studentGuid]);

  //Count schedule
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/CountNotSeenSchedule?guidStudent=${studentGuid}`
        );
        const scheduleData = response.data.data;
        // Kiểm tra xem eventData có phải là một số không
        if (typeof scheduleData === "number") {
          // Cập nhật state với tổng số sự kiện
          setTotalSchedules(scheduleData);
        } else {
          console.error("Dữ liệu sự kiện không hợp lệ:", scheduleData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };
    fetchSchedule();
  }, [studentGuid]);

  //Count transcript
  useEffect(() => {
    const fetchTranscript = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/CountNotSeenTranscript?guidStudent=${studentGuid}`
        );
        const transcriptData = response.data.data;
        // Kiểm tra xem eventData có phải là một số không
        if (typeof transcriptData === "number") {
          // Cập nhật state với tổng số sự kiện
          setTotalTranscripts(transcriptData);
        } else {
          console.error("Dữ liệu sự kiện không hợp lệ:", transcriptData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };
    fetchTranscript();
  }, [studentGuid]);

  //Count attendance
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(
          `https://ileader.cloud/api/MiniApp/CountNotSeenAttendance?guidStudent=${studentGuid}`
        );
        const attendanceData = response.data.data;
        // Kiểm tra xem eventData có phải là một số không
        if (typeof attendanceData === "number") {
          // Cập nhật state với tổng số sự kiện
          setTotalAttendances(attendanceData);
        } else {
          console.error("Dữ liệu sự kiện không hợp lệ:", attendanceData);
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh sách sự kiện:", error);
      }
    };
    fetchAttendance();
  }, [studentGuid]);

  const handleListBillonClick = () => {
    console.log("Navigating to ListBill with studentGuid:", studentGuid);
    navigate("/Notice", { state: { studentGuid } });
  };

  const handdleFillterStudentClick = () => {
    navigate("/fillterstudent", { sate: { studentGuid } });
  };

  const openChatScreen = async () => {
    try {
      await openChat({
        type: "oa",
        id: "2702588939280827714",
        message: "Xin Chào",
        success: async () => {
          try {
            const res = await axiosClient.post(
              "https://miniapp.ileader.vn/api/Test",
              {
                message: "Xin chào từ Zalo",
              },
              {
                timeout: 5000,
              }
            );
            console.log(res);
          } catch (error) {
            console.error("Error sending message to server:", error);
          }
        },
        fail: (err) => {
          console.error("Failed to open chat:", err);
        },
      });
    } catch (error) {
      console.error("Error opening chat:", error);
    }
  };

  const registerOnLick = () => {
    console.log("Navigating to ListBill with studentGuid:", studentGuid);
    navigate("/register", { state: { studentGuid } });
  };
  return (
    <Page className="section-container">
      <Text.Title size="small" className="text-branch">
        <Icon icon="zi-location" />
        Quận 1 - 31 Nguyễn Đình Chiểu
      </Text.Title>
      <Box
        mt={6}
        flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Swiper>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="/images/ileader_2.png"
              alt="slide-1"
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className="slide-img"
              src="/images/ileader_1.jpg"
              alt="slide-2"
            />
          </Swiper.Slide>
        </Swiper>
      </Box>
      <Text.Title size="small" className="">
        Lịch học
      </Text.Title>
      <Box mt={6}>
        <div className="sum-school">
          <Icon icon="zi-clock-1" />
          <p className="house-school">08:00 - 20:00(Thứ 2 - Thứ 7)</p>
        </div>
        <div className="sum-school">
          <Icon icon="zi-clock-1" />
          <p className="house-school">08:00 - 16:00(Chủ)</p>
        </div>

        <p>Buỗi trưa nghỉ giải lao 1 tiếng, quay lại học lúc 1h chiều</p>
      </Box>
      <Box mt={6}>
        <Text.Title size="small" className="text-branch">
          <p className="text-hotline">
            {" "}
            Hotline liên hệ: <b>19008098</b>
          </p>
          <br />
        </Text.Title>
      </Box>
      <Box mt={6}>
        <Text.Title size="small" className="text-branch">
          <Icon icon="zi-location" />
          Quận 1 - 31 Nguyễn Đình Chiểu
        </Text.Title>
        <iframe
          title="Company Map"
          width="330"
          height="150"
          frameBorder="0" // Thay đổi từ 'frameborder' thành 'frameBorder'
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed?pb=${encodeURIComponent(
            address
          )}&key=${apiKey}`}
          allowFullScreen // Để giữ nguyên
        ></iframe>
      </Box>
      <Box mt={6}>
        <Text.Title className="text-title">
          Nhà Thiếu Nhi Thành Phố Thành Phố Hồ Chí Minh
        </Text.Title>
        <Text.Title className="text-detail">
          Nhà Truyền thống Đội Thiếu niên Tiền phong Hồ Chí Minh tọa lạc trong
          khuôn viên Tượng Bác Hồ với thiếu nhi tại số 169 Nam Kỳ Khởi Nghĩa,
          Phường Võ Thị Sáu, Quận 3, thành phố Hồ Chí Minh. Đây là nơi lưu giữ
          và trưng bày những hình ảnh, hiện vật gắn với lịch sử của tổ chức Đội
          Thiếu niên Tiền phong Hồ Chí Minh và phong trào thiếu nhi thành phố Hồ
          Chí Minh từ năm 1941 đến nay.
        </Text.Title>
      </Box>
      <Box mt={6} className="oder-book">
        <Button
          className="btn-book"
          variant="secondary"
          fullWidth
          onClick={() => {
            setPopupVisible(true);
          }}
        >
          Đăng ký ngay
        </Button>
      </Box>
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        style={{ marginTop: "56px" }}
      >
        <BottomNavigation.Item
          key="chat"
          label="Tin nhắn"
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat-solid" />}
          onClick={openChatScreen}
        />
        <BottomNavigation.Item
          label="Sự kiện"
          key="contact"
          icon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-clock-1" />
              {totalEvents > 0 && (
                <div className="red-circle">{totalEvents}</div>
              )}
            </div>
          }
          activeIcon={<Icon icon="zi-clock-1-solid" />}
          onClick={() => {
            handleListBillonClick(studentGuid);
          }}
        />

        <BottomNavigation.Item
          key="timeline"
          label="Kế toán"
          icon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-calendar" />
              {totalAccountTants > 0 && (
                <div className="red-circle">{totalAccountTants}</div>
              )}
            </div>
          }
          activeIcon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-calendar-solid" />
              {totalAccountTants > 0 && (
                <div className="red-circle">{totalAccountTants}</div>
              )}
            </div>
          }
          onClick={() => {
            setActionSheetAcount(true);
          }}
        />
        <BottomNavigation.Item
          key="me"
          label="Học vụ"
          icon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-user" />
              {totalAcademics > 0 && (
                <div className="red-circle">{totalAcademics}</div>
              )}
            </div>
          }
          activeIcon={
            <div className="accounting-icon-wrapper">
              <Icon icon="zi-user-solid" />
              {totalAcademics > 0 && (
                <div className="red-circle">{totalAcademics}</div>
              )}
            </div>
          }
          onClick={() => {
            setActionSheetVisible(true);
          }}
        />
      </BottomNavigation>
      <Sheet.Actions
        mask
        visible={actionSheetVisible}
        title="Phụ huynh có thể vào đây xem thông tin học sinh"
        onClose={() => setActionSheetVisible(false)}
        swipeToClose
        actions={[
          [
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Thời khóa biểu</span>
                  {totalSchedules > 0 && (
                    <div className="red-box-notice">{totalSchedules}</div>
                  )}
                </div>
              ),
              onClick: () => {
                navigate("/TimeTable", { state: { studentGuid } });
              },
            },
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Bảng điểm</span>
                  {totalTranscripts > 0 && (
                    <div className="red-box-notice">{totalTranscripts}</div>
                  )}
                </div>
              ),
              onClick: () => {
                navigate("/transcript", {
                  state: { studentName, studentGuid },
                });
              },
            },
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Điểm danh</span>
                  {totalAttendances > 0 && (
                    <div className="red-box-notice">{totalAttendances}</div>
                  )}
                </div>
              ),
              onClick: () => {
                navigate("/dayscorses", { state: { studentGuid } });
              },
            },
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Lộ trình học tập</span>
                  {totalAttendances > 0 && (
                    <div className="red-box-notice">{totalAttendances}</div>
                  )}
                </div>
              ),
              onClick: () => {
                navigate("/routerstudent", { state: { studentGuid } });
              },
            },
          ],
          [{ text: "Thoát", close: true }],
        ]}
      />

      {/* //Acount  */}
      <Sheet.Actions
        mask
        visible={actionSheetAcount}
        title="Vào đây xem thông tin thiếu đăng ký và học phí"
        onClose={() => setActionSheetAcount(false)}
        swipeToClose
        actions={[
          [
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Phiếu thu học phí</span>
                  {totalTuitions > 0 && (
                    <span className="red-box-notice">{totalTuitions}</span>
                  )}
                </div>
              ),
              onClick: () => {
                navigate("/account", { state: { studentGuid } });
              },
            },
            {
              text: (
                <div className="accounting-icon-wrapper">
                  <span>Phiếu thu đăng ký</span>
                  {totalRegisters > 0 && (
                    <div className="red-box-notice">{totalRegisters}</div>
                  )}
                </div>
              ),
              onClick: () => {
                navigate("/reg", { state: { studentGuid, studentName } });
              },
            },
          ],
          [{ text: "Thoát", close: true }],
        ]}
      />
      <Modal
        visible={popupVisible}
        title="Chức năng đang phát triển"
        coverSrc={"/images/update.png"}
        onClose={() => {
          setPopupVisible(false);
        }}
        verticalActions
      >
        <Box p={6}>
          <Button
            className="btn-submit"
            onClick={() => {
              setPopupVisible(false);
            }}
            fullWidth
          >
            Xác nhận
          </Button>
        </Box>
      </Modal>
    </Page>
  );
};
export default DetailBranch;
