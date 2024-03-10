import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuMusic4 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import KakaoImage from "../images/kakao.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbCircleNumber1 } from "react-icons/tb";

function ChatRoomPage() {
  const navigate = useNavigate();

  const [chatRooms] = useState([
    {
      id: 1,
      name: "김선미",
      lastMessage: "다이브 지원합니다.",
      timestamp: new Date(),
    },
    {
      id: 2,
      name: "다이브",
      lastMessage: "서류전형 발표결과가 도착했습니다.",
      timestamp: new Date(),
    },
  ]);

  const handleChatRoomClick = (roomId) => {
    navigate(`/chat/${roomId}`);
  };
  return (
    <Container>
      <Nav>
        <Chat>chats</Chat>
        <Box>
          <Icon>
            <CiSearch />
          </Icon>
          <Icon>
            <IoChatbubbleOutline />
          </Icon>
          <Icon>
            <LuMusic4 />
          </Icon>
          <Icon>
            <IoSettingsOutline />
          </Icon>
        </Box>
      </Nav>
      <ChatContainer>
        {chatRooms.map((room) => (
          <ChatList key={room.id} onClick={() => handleChatRoomClick(room.id)}>
            <Img src={KakaoImage} alt="Kakao Image" />
            <MessageData>
              <Name>{room.name}</Name>
              <Text>{room.lastMessage}</Text>
            </MessageData>
            <AlertData>
              <Time>
                {room.timestamp ? room.timestamp.toLocaleTimeString() : ""}
              </Time>
              <Alert>
                <TbCircleNumber1 />
              </Alert>
            </AlertData>
          </ChatList>
        ))}
      </ChatContainer>
      <Footer>
        <IoPersonOutline />
        <IoChatbubbleSharp />
        <CiSearch />
        <PiDotsThreeOutlineLight />
      </Footer>
    </Container>
  );
}
export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0px 30px 0px 30px;
`;

const Chat = styled.div`
  font-size: 40px;
  font-weight: 500;
  flex: 1;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  margin: 0 10px;
  font-size: 28px;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ChatList = styled.div`
  display: flex;
  padding: 0px 30px 20px 30px;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin-right: 20px;
`;

const MessageData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Name = styled.div``;
const Text = styled.div``;

const AlertData = styled.div``;

const Alert = styled.div`
  font-size: 32px;
  text-align: right;
`;
const Time = styled.div``;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
  height: 70px;
  background-color: #f9f9fa;
`;

export default ChatRoomPage;
