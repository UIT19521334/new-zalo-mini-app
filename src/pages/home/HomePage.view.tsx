
import React, { useState } from "react";
import { Sheet, Button, Page, Text, useNavigate, Header, BottomNavigation, Icon, Input, Box, Swiper } from "zmp-ui";
import Colors from "../../constant/colors";

const HomePage: React.FunctionComponent = (props) => {
  const [actionSheetOpened, setActionSheetOpened] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Healthy");

  const Tabs = ["Healthy", "Technology", "Finance", "Arts"];

  return (
    <Page className="page">

      <Box flexDirection="row" alignItems="center" >
        <Input.Search
          label="Label"
          helperText="Helper text"
          // loading
          placeholder="Search for App information"
          onSearch={(text) => console.log(text)}
        />

        <Box width={10} />
        <Button
          size="large"
          icon={<Icon icon="zi-notif" />}
          variant="primary"
        />
      </Box>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <Text size="xLarge" style={{ fontFamily: "Dancing Script", fontSize: 24, fontWeight: 'bold' }} >
          Latest News
        </Text>
        <Button variant="tertiary" type="highlight" suffixIcon={<Icon icon="zi-arrow-right" />}>
          {/* <Text style={{ fontFamily: "Dancing Script", fontSize: 20 }}> */}
          See all
          {/* </Text> */}
        </Button>
      </Box>

      <Box
        mt={2}
        flex
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Swiper autoplay duration={2000} loop>
          <Swiper.Slide>
            <img
              className='slide-img'
              src='https://stc-zmp.zadn.vn/zmp-zaui/images/0e05d63a7a93a6cdff826.jpg'
              alt='slide-1'
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className='slide-img'
              src='https://stc-zmp.zadn.vn/zmp-zaui/images/0f7c061caab576eb2fa45.jpg'
              alt='slide-2'
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className='slide-img'
              src='https://stc-zmp.zadn.vn/zmp-zaui/images/321fb45f18f6c4a89de78.jpg'
              alt='slide-3'
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className='slide-img'
              src='https://stc-zmp.zadn.vn/zmp-zaui/images/4f417921d58809d650997.jpg'
              alt='slide-4'
            />
          </Swiper.Slide>
          <Swiper.Slide>
            <img
              className='slide-img'
              src='https://stc-zmp.zadn.vn/zmp-zaui/images/677fad2e0187ddd984969.jpg'
              alt='slide-5'
            />
          </Swiper.Slide>
        </Swiper>
      </Box>

      <div style={{ width: 'max-content', overflowX: 'auto', marginTop: 12 }}>

        {
          Tabs.map((item, index) => {
            return (
              <Button
                key={index}
                size="medium"
                variant="tertiary"
                onClick={() => setActiveTab(item)}
                // className=" bg-primary text-white rounded-lg h-12"
                style={{ color: activeTab === item ? Colors.WHITE : Colors.BLACK, backgroundColor: activeTab === item ? Colors.PRIMARY : Colors.WHITE, marginRight: 12 }}
                type="highlight"
              >
                {item}
              </Button>
            )
          })
        }


      </div>

      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
      >
        <BottomNavigation.Item
          key="chat"
          label="Tin Nhắn"
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat-solid" />}
        />
        <BottomNavigation.Item
          label="Danh bạ"
          key="contact"
          icon={<Icon icon="zi-call" />}
          activeIcon={<Icon icon="zi-call-solid" />}
        />
        <BottomNavigation.Item
          label="Khám phá"
          key="discovery"
          icon={<Icon icon="zi-more-grid" />}
          activeIcon={<Icon icon="zi-more-grid-solid" />}
        />
        <BottomNavigation.Item
          key="timeline"
          label="Nhật ký"
          icon={<Icon icon="zi-clock-1" />}
          activeIcon={<Icon icon="zi-clock-1-solid" />}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
        />
      </BottomNavigation>
    </Page>
  );
};

export default HomePage;
