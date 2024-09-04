import React, { useState } from 'react'
import { Avatar, Button, Icon, Page, useNavigate } from 'zmp-ui'
import { ListHotNews, ListHotTag } from './HomePage.data'
import HotNews from './components/HotNews'
import UserCard from 'components/user-card'
const HomePage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("news");
    return (
        <Page>
            <div className="header bg-orange-500 py-2 flex justify-between items-center px-4">
                <Button icon={<Icon icon='zi-list-1' className='text-white' />}/>
                
                <button className='text-white'>Hot</button>
                <button className='text-white'>News</button>
                <button className='text-white'>Sport</button>
                <button className='text-white'>Car 360</button>
                <Icon icon='zi-search' className='text-white' />
                <Avatar size={32} story='seen' online backgroundColor='BLUE-BLUELIGHT' />
            </div>

            <div className="tag p-4 bg-white">
                <h2 className='mb-4'>QUICK SEARCH</h2>
                <div className="tag-group inline-block">
                    <ul className='gap-4 flex flex-wrap items-center'>
                        {ListHotTag.map((item, index) =>
                            <li key={index}>
                                <button className='p-2 rounded-md  border border-gray-400 whitespace-nowrap'>{item}</button>
                            </li>
                        )}
                    </ul>

                </div>
            </div>
            <div className="tag p-4 bg-white mt-1">
                <div className='flex mb-4 items-center'>
                    <Icon icon='zi-poll-solid' size={24} className='text-orange-600' />
                    <h2 className=' text-orange-600 ml-2'>NÓNG 24H</h2>
                </div>
                <div className="">
                    {
                        ListHotNews.map((item, index) =>
                            <HotNews
                                authorImg={item.author}
                                imageUrl={item.image}
                                time={item.time}
                                title={item.title}
                                key={index}
                            />
                        )
                    }
                </div>
                <button className='w-full justify-center mt-2 font-medium font-sans'>Đọc thêm</button>
            </div>
            <div className="tag p-4 bg-white mt-1">
                <div className='flex mb-4 items-center'>
                    <Icon icon='zi-poll-solid' size={24} className='text-orange-600' />
                    <h2 className=' text-orange-600 ml-2'>ĐANG ĐƯỢC QUAN TÂM</h2>
                </div>
                <div className="">
                    {
                        ListHotNews.map((item, index) =>
                            <HotNews
                                authorImg={item.author}
                                imageUrl={item.image}
                                time={item.time}
                                title={item.title}
                                key={index}
                            />
                        )
                    }
                </div>
                <button className='w-full justify-center mt-2 font-medium font-sans'>Đọc thêm</button>
            </div>
            <div className='h-[50px]' />
        </Page>


    )
}

export default HomePage