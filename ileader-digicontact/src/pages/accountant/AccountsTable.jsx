import React from "react";
import { Box, Select, Text } from "zmp-ui";
import { formatDate, formatCurrency } from "../shared/utils/formatUtils";
import HeaderFormDate from "./HeaderFormDate";
import "../../css/accountant/tuitionfees.css";

const AccountsTable = ({ accounts, isLoading }) => (
  <Box>
    <HeaderFormDate image={"./images/icon/icon-book.png"} title={"Danh sách phiếu thu"}/>
    <div className="table-container">
      <table className="custom-table">
        <thead className="title-custom-table">
          <tr>
            <th>Mã phiếu</th>
            <th>Ngày thu</th>
            <th>Thanh toán</th>
            <th>Ví tiền</th>
            <th>Tổng thu</th>
            <th>Hình thức thanh toán</th>
            <th>Ghi chú</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading && accounts.length > 0 ? (
            accounts.map((account, index) => {
              const parsedJsonContent = JSON.parse(account.jsonContent || "{}");
              return (
                <tr key={index}>
                  <td>{parsedJsonContent.Id || <td>N/A</td>}</td>
                  <td>{formatDate(parsedJsonContent.DateCreated)}</td>
                  <td>{formatCurrency(parsedJsonContent.Abate)}</td>
                  <td>{formatCurrency(parsedJsonContent.Purse)}</td>
                  <td>{formatCurrency(parsedJsonContent.TotalBill)}</td>
                  <td>{parsedJsonContent.FormsOfPayment || <td>N/A</td>}</td>
                  {parsedJsonContent.Note ? <td>{(parsedJsonContent.Note.length > 20 ? `${parsedJsonContent.Note.substring(0, 20)}...` 
                                                                                : parsedJsonContent.Note)}</td>
                                          : <td>N/A</td>}                
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" className="text-student">
                Hiện tại không có thông tin học phí nào?
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </Box>
);

export default AccountsTable;
