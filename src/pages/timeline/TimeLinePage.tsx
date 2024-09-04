import React, { useEffect, useState } from "react";
import { Page, Box, Text, Input, Select, DatePicker, Button, Avatar, Icon } from "zmp-ui";
import { formatDate, getWeekDatesWithTasks } from "./TimeLinePage.services";
import { statusColors } from "constant/colors";
import { ListTask } from "./ListTask";
import DailyTask from "components/daily-taks";

type WeekDate = {
    date: string;       // The full date in YYYY-MM-DD format
    day: string;        // The name of the day (e.g., Monday, Tuesday)
    dayOfMonth: number; // The day of the month as a number
    tasks: task[];      // The number of tasks for that day
};

type task = {
    status: string
}



export default function TimeLinePage() {
    const [dayOfWeek, setDayOfWeek] = useState<WeekDate[]>(getWeekDatesWithTasks())
    const [daySelected, setDaySelected] = useState<WeekDate>(getWeekDatesWithTasks("getCurrentDay"))

    return (
        <Page>
            <div className="bg-[#F8F8FA] py-2 flex justify-between items-center px-4">
                <div className="flex justify-between items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.5" cx="12" cy="10" r="7" fill="#A98B98" />
                        <path d="M9.60212 8.21316C9.47104 6.75421 8.34593 5.39474 7.79976 4.89737L7.49805 4.63933C8.71505 3.61626 10.2854 3 11.9998 3C13.5491 3 14.9809 3.50337 16.1405 4.3555C16.3044 4.85287 15.9923 5.89211 15.6646 6.38947C15.5459 6.56963 15.2767 6.79329 14.9817 7.0053C14.3163 7.48334 13.4767 7.71978 13.0498 8.6C12.9277 8.85162 12.9329 9.09758 12.9916 9.31138C13.0338 9.46509 13.0608 9.63217 13.0612 9.79558C13.0626 10.324 12.5282 10.7058 11.9998 10.7C10.6248 10.685 9.72465 9.57688 9.60212 8.21316Z" fill="#A98B98" />
                        <path d="M13.0057 14.3935C13.6974 13.0901 16.003 13.0901 16.003 13.0901C18.4053 13.065 18.7299 11.6064 18.9468 10.8691C18.5585 14.0061 16.0948 16.4997 12.9722 16.9335C12.7463 16.4582 12.4788 15.3865 13.0057 14.3935Z" fill="#A98B98" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0035 1.49982C18.2797 1.19118 18.7539 1.16491 19.0625 1.44116C21.3246 3.4658 22.75 6.41044 22.75 9.687C22.75 15.4384 18.3612 20.1647 12.75 20.6996V21.25H14C14.4142 21.25 14.75 21.5858 14.75 22C14.75 22.4142 14.4142 22.75 14 22.75H10C9.58579 22.75 9.25001 22.4142 9.25001 22C9.25001 21.5858 9.58579 21.25 10 21.25H11.25V20.7415C8.14923 20.621 5.37537 19.2236 3.44116 17.0625C3.16491 16.7539 3.19118 16.2797 3.49982 16.0035C3.80847 15.7272 4.28261 15.7535 4.55886 16.0622C6.31098 18.0198 8.85483 19.25 11.687 19.25C16.9685 19.25 21.25 14.9685 21.25 9.687C21.25 6.85483 20.0198 4.31098 18.0622 2.55886C17.7535 2.28261 17.7272 1.80847 18.0035 1.49982Z" fill="#A98B98" />
                    </svg>
                    <div className="ml-2">
                        <p className="text-sm font-normal">Time zone</p>
                        <p className="text-lg font-mediums">EST time...</p>
                    </div>
                </div>
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M39.5833 22C39.5833 31.711 31.711 39.5833 22 39.5833C12.289 39.5833 4.41666 31.711 4.41666 22C4.41666 12.289 12.289 4.41666 22 4.41666C31.711 4.41666 39.5833 12.289 39.5833 22Z" stroke="#A98B98" stroke-width="1.5" />
                    <path d="M30.3881 34.2357C28.0025 35.8744 25.1144 36.8333 22 36.8333C18.8856 36.8333 15.9974 35.8743 13.6118 34.2356C12.7659 33.6544 12.4804 32.6101 12.9089 31.8252C14.0511 29.7335 16.4531 28.25 22 28.25C27.5469 28.25 29.9489 29.7336 31.091 31.8253C31.5196 32.6102 31.2341 33.6546 30.3881 34.2357ZM26.7501 16.5C26.7501 19.1234 24.6234 21.25 22.0001 21.25C19.3767 21.25 17.2501 19.1234 17.2501 16.5C17.2501 13.8766 19.3767 11.75 22.0001 11.75C24.6234 11.75 26.7501 13.8766 26.7501 16.5Z" fill="#A98B98" stroke="#A98B98" stroke-width="1.5" />
                </svg>
            </div>
            <div className="bg-white pt-1">
                <div className="px-4">
                    <h1 className="ml-3 font-semibold text-2xl mt-1 mb-3">Jan 2024</h1>
                    <div className="flex overflow-x-auto items-center gap-4 ">
                        {dayOfWeek.map((item, index) =>
                            <div key={index} className="flex flex-col items-center">
                                <button
                                    onClick={() => setDaySelected(item)}
                                    className={`flex flex-col items-center rounded-lg  border py-1 text-[#81626F] ${item.date === daySelected?.date ? 'border-[#81626F] bg-[#F8EDE2]' : 'border-[#F8EDE2]'}`}>
                                    <p className="text-lg font-extralight w-[46px]">{item?.day || "Mon"}</p>
                                    <p className="text-lg font-medium">{item?.dayOfMonth || "02"}</p>
                                </button>
                                <div className="flex justify-center items-center gap-1 my-1">
                                    {item.tasks.map((task, taskIndex) =>
                                        <div
                                            key={taskIndex}
                                            className='h-1 w-1 rounded-full'
                                            style={{backgroundColor: statusColors[task.status]}}
                                        ></div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="rounded-t-2xl bg-black mt-4 w-full">
                    <div className="flex items-center py-3  px-4">
                        <div className='h-2 w-2 rounded-full bg-[#A98B98]'></div>
                        <p className="text-lg text-white font-normal ml-2">{formatDate(daySelected?.date!)}</p>
                    </div>
                    <div className="rounded-t-2xl bg-white w-full p-4 pb-[80px]">
                        {ListTask.map((item,index)=>
                            <DailyTask key={index} data={item}/>
                        )}
                    </div>
                </div>
            </div>
        </Page>
    );
}
