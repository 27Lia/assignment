import styled from "styled-components";
import { FaWifi } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaBatteryQuarter } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  height: 30px;
`;

const LeftBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

const RightBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const timeOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  };

  return (
    <>
      <Container>
        <LeftBar>
          <div>No Service</div>
          <div>
            <FaWifi />
          </div>
        </LeftBar>
        <Center>
          <div>{currentTime.toLocaleTimeString([], timeOptions)}</div>
        </Center>
        <RightBar>
          <div>
            <FaLock />
          </div>
          <div>11%</div>
          <div>
            <FaBatteryQuarter />
          </div>
          <div>
            <AiFillThunderbolt />
          </div>
        </RightBar>
      </Container>
    </>
  );
};

export default Header;
