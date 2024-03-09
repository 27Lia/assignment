import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuMusic4 } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";
import { PiDotsThreeOutlineLight } from "react-icons/pi";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
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
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ChatList = styled.div`
  display: flex;
  padding: 0px 30px 0px 30px;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.div``;

const MessageData = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid;
`;

const Name = styled.div``;
const Text = styled.div``;

const AlertData = styled.div``;

const Alert = styled.div``;
const Time = styled.div``;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
  height: 70px;
  background-color: #f9f9fa;
`;

function ChatRoomPage() {
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
        <ChatList>
          <Img>이미지</Img>
          <MessageData>
            <Name>이름</Name>
            <Text>내용</Text>
          </MessageData>
          <AlertData>
            <Time>시간</Time>
            <Alert>알림</Alert>
          </AlertData>
        </ChatList>
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

export default ChatRoomPage;
