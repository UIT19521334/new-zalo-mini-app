
import React, { useState } from "react";
import { Sheet, Button, Page, Text, useNavigate, Header, BottomNavigation, Icon, Input, Box, Swiper, List } from "zmp-ui";
import Colors from "../../constant/colors";
import ZaloBottomTabs from "components/bottom-tabs";

const DiscoverPage: React.FunctionComponent = (props) => {
  const [actionSheetOpened, setActionSheetOpened] = useState(false);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("discovery");

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

      <div className="flex justify-between">
        <h3 className="mt-0.5 text-lg text-blue-900 font-bold">Local news</h3>

      </div>

      <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>

      <article className="group mt-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="p-4">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>

      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm mt-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="p-4 sm:p-6">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
            pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
            mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
            dignissimos. Molestias explicabo corporis voluptatem?
          </p>

          <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Find out more

            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
              &rarr;
            </span>
          </a>
        </div>
      </article>

      {/*
  Heads up! 👋

theme: {
  extend: {
    animation: {
      border: 'background ease infinite',
    },
    keyframes: {
      background: {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
      },
    },
  },
}
*/}

      <article
        className="mt-4 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
      >
        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <div className="mt-4 flex flex-wrap gap-1">
            <span
              className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
            >
              Snippet
            </span>

            <span
              className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
            >
              JavaScript
            </span>
          </div>
        </div>
      </article>


      <article
        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 mt-4"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
          animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
          itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
          Molestias explicabo corporis voluptatem?
        </p>

        <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
          Find out more
          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </a>
      </article>

      <article className="flex bg-white transition hover:shadow-xl mt-4">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>2022</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900">
                Finding the right guitar for your style - 5 tips
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read Blog
            </a>
          </div>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-4">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
          <div className="p-4 sm:p-6">
            <time dateTime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </div>
      </article>
    </Page>
  );
};

export default DiscoverPage;
