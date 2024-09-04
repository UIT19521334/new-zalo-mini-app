import { statusColors } from 'constant/colors'
import { IStatus } from 'constant/type'
import React from 'react'
import { Button, Icon } from 'zmp-ui'

type IDailyTask = {
    time: string,
    title: string,
    desc: string,
    address: string,
    status: IStatus
}

const DailyTask = ({ data }) => {

    const { time, title, desc, address, status } = data
    return (
        <div
            className='rounded-2xl border p-2 px-4 mb-3'
            style={{ borderColor: statusColors[status] }}
        >
            <div className="flex items-center ">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.03333 3.73126L8.49999 0.53334L15.9667 3.73126M1.03333 3.73126L8.49999 6.92917M1.03333 3.73126V3.73334M15.9667 3.73126L8.49999 6.92917M15.9667 3.73126V12.2667L8.49999 15.4667M15.9667 3.73126L8.49999 6.93334V15.4667M8.49999 6.92917V15.4667M8.49999 6.92917L1.03333 3.73334M8.49999 15.4667L1.03333 12.2667V3.73334" stroke={statusColors[status]} stroke-linejoin="round" />
                </svg>
                <p className="text-sm text-gray-600 ml-2">{time}</p>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-lg text-black font-medium my-1">{title}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>
                </div>
                <Button
                    style={{color: statusColors[status]}}
                    variant="tertiary"
                    icon={<Icon icon="zi-drag-indicator-solid" />}
                />

            </div>
            <div className="flex items-center mt-2 ">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 6.38598C4.25 3.68753 6.60051 1.5 9.5 1.5C12.3995 1.5 14.75 3.68753 14.75 6.38598C14.75 9.06328 13.0744 12.1874 10.46 13.3047C9.85061 13.5651 9.14939 13.5651 8.53995 13.3047C5.92562 12.1874 4.25 9.06328 4.25 6.38598Z" stroke="#333333" stroke-width="1.5" />
                    <path d="M11 6.75C11 7.57843 10.3284 8.25 9.5 8.25C8.67157 8.25 8 7.57843 8 6.75C8 5.92157 8.67157 5.25 9.5 5.25C10.3284 5.25 11 5.92157 11 6.75Z" stroke="#333333" stroke-width="1.5" />
                    <path d="M16.2204 11.625C16.7194 12.0769 17 12.5862 17 13.125C17 14.989 13.6421 16.5 9.5 16.5C5.35786 16.5 2 14.989 2 13.125C2 12.5862 2.28059 12.0769 2.7796 11.625" stroke="#333333" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <p className="text-sm text-gray-600 ml-2">{address}</p>
            </div>
        </div>
    )
}

export default DailyTask