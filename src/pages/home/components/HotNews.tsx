import React from 'react'
import { useNavigate } from 'zmp-ui'

const HotNews = ({ imageUrl, authorImg, time, title }) => {
    const navigate = useNavigate();
    return (
        <div className="hot-news" onClick={() => navigate('/news')}>
            <div className="flex items-start py-4 border-b-[1px]">
                <img
                    src={imageUrl}
                    alt="Example"
                    className="object-cover h-[100px] rounded-lg"
                />
                <div className="ml-2 items-start flex flex-col justify-between h-[100px]">
                    <h1 className='text-black text-lg font-medium -mt-2 line-clamp-3'>{title}</h1>
                    <div className="flex ">
                        <img
                            // src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Logo_VOV.svg"
                            src={authorImg}
                            alt="Example"
                            className="object-contain w-[40px] rounded-lg"
                        />
                        <h3 className='ml-2'>{time}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotNews