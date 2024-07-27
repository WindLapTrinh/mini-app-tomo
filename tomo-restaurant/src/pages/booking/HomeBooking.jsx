import React, { useState } from 'react';
import { Box, Text, Input, Button, Select } from 'zmp-ui'; // Sử dụng thư viện UI như ZMP-UI hoặc bất kỳ thư viện nào bạn đang dùng
import ButtonBooking from "../booking/ButtonBooking"
import CustomBottomNavigation from '../../components/layout/CustomBottomNavigation';
import "../../css/booking/homeBooking.css"
import SetTitleHeader from "@/pages/shared/hooks/setTitleHeader";

const Booking = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  SetTitleHeader({
    title: "Đặt bàn online"
  })
  const handleSubmit = () => {
    // Xử lý gửi thông tin đặt chỗ ở đây
    alert(`Đặt chỗ thành công:
      Ngày: ${date}
      Thời gian: ${time}
      Số lượng khách: ${guests}
      Yêu cầu đặc biệt: ${specialRequests}`);
  };

  return (
    <Box p={4} className="booking-page">
      <Box className="infomation-booking">
      <Box mt={4}>
        <Text className="title-booking" size="md" weight="medium">Nguời đặt bàn</Text>
        <Input 
          type="text"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="tên người đặt bàn..."
        />
      </Box>
      <Box mt={4}>
        <Text className="title-booking" size="md" weight="medium">Số điện thoại</Text>
        <Input 
          type="text"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="số điện thoại..."
        />
      </Box>
      <Box mt={4}>
        <Text className="title-booking" size="md" weight="medium">Ngày</Text>
        <Input 
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Chọn ngày"
        />
      </Box>
      <Box mt={4}>
        <Text className="title-booking" size="md" weight="medium">Thời gian</Text>
        <Input 
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Chọn thời gian"
        />
      </Box>
      <Box mt={4}>
        <Text className="title-booking" size="md" weight="medium">Số lượng khách</Text>
        <Select 
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          placeholder="Chọn số lượng khách"
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
        </Select>
      </Box>
      <Box mt={4} >
        <Text className="title-booking" size="md" weight="medium">Yêu cầu đặc biệt</Text>
        <Input 
          type="text"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          placeholder="Nhập yêu cầu đặc biệt (nếu có)"
        />
      </Box>
      </Box>
      <ButtonBooking/>
      <CustomBottomNavigation/>
    </Box>
  );
}
export default Booking
