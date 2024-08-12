
import React, { useState } from "react";
import { Sheet, Button, Page, Text, useNavigate, Header, BottomNavigation, Icon, Input, Box, Swiper, List } from "zmp-ui";
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

      <div className="w-full overflow-x-auto">
        <div className="flex space-x-2 pt-4 mb-4">
          {
            Tabs.map((item, index) => {
              return (
                <Button
                  key={index}
                  size="medium"
                  variant="tertiary"
                  onClick={() => setActiveTab(item)}
                  // className=" bg-primary text-white rounded-lg h-12"
                  className="flex-shrink-0"
                  style={{ color: activeTab === item ? Colors.WHITE : Colors.BLACK, backgroundColor: activeTab === item ? Colors.PRIMARY : Colors.WHITE, width: 'fit-content' }}
                  type="highlight"
                >
                  {item}
                </Button>
              )
            })
          }

        </div>
      </div>


      <div className="relative w-full h-64 mt-4" onClick={() => navigate('/news')}>
        <img
          src="https://www.japfa.com/assets/filemanager/07062401-Toba-Tilapia_at-FairPrice.jpg"
          alt="Example"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 rounded-2xl">
          <h1 className="text-white text-3xl font-bold mb-6 text-left ml-6">With TOBA TILAPIA, Japfa delivers premium products</h1>
        </div>
      </div>
      <div className="relative w-full h-64 mt-4">
        <img
          src="https://www.japfa.com/assets/filemanager/07062402-Toba-Tilapia_at-FairPrice.jpg"
          alt="Example"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 rounded-2xl">
          <h1 className="text-white text-3xl font-bold mb-6 text-left ml-6">The export of TOBA TILAPIA is also a collaborative effort</h1>
        </div>
      </div>
      <div className="relative w-full h-64   mt-4">
        <img
          src="https://www.japfa.com/assets/filemanager/07062403-Toba-Tilapia_at-FairPrice.jpg"
          alt="Example"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 rounded-2xl">
          <h1 className="text-white text-3xl font-bold mb-6 text-left ml-6">The launch of TOBA TILAPIA in Singapore was welcomed</h1>
        </div>
      </div>



      {/* <BottomNavigation
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
      </BottomNavigation> */}
    </Page>
  );
};

export default HomePage;
