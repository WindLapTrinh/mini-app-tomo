import React from "react";
import { Box, Select, Text, Swiper } from "zmp-ui";
import { formatDate, formatCurrency } from "../shared/utils/formatUtils";
import HeaderFormDate from "./HeaderFormDate";
import parse from 'html-react-parser';
import axiosClient from "../shared/config/axios";

const RollcallsTable = ({ rollcalls, isLoading }) => (
  <Box>
    <HeaderFormDate image={"./images/icon/icon-receipts.png"} title={"Bảng điểm danh"}/>
    <div className="table-container">
      <table className="custom-table">
        <thead className="title-custom-table">
          <tr>
            <th>Ngày</th>
            <th>Trạng thái</th>
            <th>Nhận xét</th>
            <th>Hình ảnh</th>
            <th>Ghi chú</th>
            
          </tr>
        </thead>
        <tbody>
          {!isLoading && rollcalls.length > 0 ? (
            rollcalls.map((rollcall, index) => {
              const parsedJsonContent = (rollcall || "{}");
              const detailsRollCalls = JSON.parse(parsedJsonContent.jsonContent ||"{}");
              console.log(detailsRollCalls);
              return (
                <tr key={index}>
                  <td>{formatDate(parsedJsonContent.dateCreated)}</td>
                  <td>{detailsRollCalls[0]?.Status || "N/A"}</td>
                  <td>{detailsRollCalls[0]?.CriteriaName || "N/A"}</td>
                  <td>{detailsRollCalls[0].Image != null 
                                                 ? <Swiper dots={false}
                                                           autoplay= {true}
                                                   >
                                                    {Array.isArray(detailsRollCalls[0].Image) &&
                                                      detailsRollCalls[0].Image.map((imageSrc, imgIndex) => (
                                                        <Swiper.Slide key={imgIndex}>
                                                          <img
                                                            className="slide-img"
                                                            src={"https://ileader.cloud" + imageSrc}
                                                            alt={`slide-${imgIndex + 1}`}
                                                          />
                                                        </Swiper.Slide>
                                                      ))}
                                                  </Swiper>
                                                 : "N/A"}</td>
                  <td>
                    {detailsRollCalls[0]?.Note ? (
                      parse(detailsRollCalls[0].Note.length > 20 
                        ? `${detailsRollCalls[0].Note.substring(0, 20)}...` 
                        : detailsRollCalls[0].Note)
                    ) : (
                      "N/A"
                    )}
                  </td>               
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="7" className="text-student">
                Hiện tại không có thông tin điểm danh nào?
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </Box>
);

export default RollcallsTable;
