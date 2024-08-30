import React, { useState } from "react";
import { Box, Modal } from "zmp-ui";
import { formatDate, formatCurrency } from "../shared/utils/formatUtils";
import HeaderFormDate from "./HeaderFormDate";
import usePayment from "../shared/hooks/usePayment";

const RegisterTable = ({ registers, isLoading }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedReg, setSelectedReg] = useState(null);
  const { handlePayment } = usePayment();
  const handleRowClick = (register) => {
    setSelectedReg(register);
    setModalVisible(true);
  };
  const pairStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "-15px",
  };

  const formatRegInfo = (register) => {
    const parsedJsonContent = (register || "{}");
    const infoPairs = [
      {
        label: "Ngày đăng ký",
        value: formatDate(parsedJsonContent.RegisterDate),
      },
      {
        label: "Họ tên",
        value: parsedJsonContent.StudentName ?? parsedJsonContent.StudentName,
      },
      {
        label: "Người tạo",
        value: parsedJsonContent.EmployeeName ?? parsedJsonContent.EmployeeName,
      },
      {
        label: "Tổng hóa đơn",
        value: formatCurrency(
          parsedJsonContent.TotalBill ?? parsedJsonContent.TotalBill
        ),
      },

      {
        label: "Thanh toán",
        value: formatCurrency(parsedJsonContent.Paid ?? parsedJsonContent.Paid),
      },
      {
        label: "Còn nợ",
        value: formatCurrency(
          parsedJsonContent.Remaining ?? parsedJsonContent.Remaining
        ),
      },
    ];

    return infoPairs.map((pair, index) => (
      <div
        style={{
          ...pairStyle,
          marginBottom: index === infoPairs.length - 1 ? 0 : "-15px",
        }}
        key={index}
      >
        <span>{pair.label}:</span>
        <span>{pair.value}</span>
      </div>
    ));
  };

  return (
    <Box>
      <HeaderFormDate image={"./images/icon/icon-receipts.png"} title={"Danh sách phiếu thu"} />
      <div className="table-container">
        <table className="custom-table">
          <thead className="title-custom-table">
            <tr>
              <th>Mã phiếu</th>
              <th>Ngày đăng ký</th>
              <th>Họ tên</th>
              <th>Người tạo</th>
              <th>Tổng hóa đơn</th>
              <th>Thanh toán</th>
              <th>Còn nợ</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && registers.length > 0 ? (
              registers.map((register, index) => {
                const parsedJsonContent = JSON.parse(register.jsonContent || "{}");
                return (
                  <tr key={index} onClick={() => handleRowClick(parsedJsonContent)}>
                    <td>{parsedJsonContent.Id || "N/A"}</td>
                    <td>{formatDate(parsedJsonContent.DateCreated)}</td>
                    <td>{parsedJsonContent.StudentName || "N/A"}</td>
                    <td>{parsedJsonContent.EmployeeName || "N/A"}</td>
                    <td>{formatCurrency(parsedJsonContent.TotalBill)}</td>
                    <td>{formatCurrency(parsedJsonContent.Paid)}</td>
                    <td>{formatCurrency(parsedJsonContent.Remaining)}</td>
                    <td>{parsedJsonContent.Note ? 
                        (parsedJsonContent.Note.length > 20 
                          ? `${parsedJsonContent.Note.substring(0, 20)}...` 
                          : parsedJsonContent.Note) 
                        : "N/A"}
                    </td>              
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="8" className="text-student">
                  Hiện tại không có thông tin đăng ký nào?
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Modal
        visible={modalVisible}
        title="Thanh toán online"
        onClose={() => setModalVisible(false)}
        zIndex={1200}
        actions={[
          {
            text: "Đồng ý",
            onClick: () => handlePayment(selectedReg)
            // onClick: () => {
            //   setModalVisible(false);
            //   // Handle the payment logic here
            // }
          },
          {
            text: "Hủy",
            close: true,
            danger: true,
          },
        ]}
        description=""
      >
        <Box className="space-y-4">
          {selectedReg && (
            <React.Fragment>
              {formatRegInfo(selectedReg).map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </React.Fragment>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default RegisterTable;
