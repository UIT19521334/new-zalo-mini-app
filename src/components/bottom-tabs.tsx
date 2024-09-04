import React, { useState } from 'react'
import { BottomNavigation, Icon, useNavigate } from 'zmp-ui'

const ZaloBottomTabs = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("/")
    return (
        <BottomNavigation
            fixed
            activeKey={activeTab}
            onChange={(key) => {
                setActiveTab(key)
                navigate(key)
            }}
        >
            <BottomNavigation.Item
                key="/"
                label="Tin tức"
                icon={<Icon icon="zi-chat" />}
                activeIcon={<Icon icon="zi-chat-solid" />}
            />

            <BottomNavigation.Item
                label="Khám phá"
                key="/discovery"
                icon={<Icon icon="zi-more-grid" />}
                activeIcon={<Icon icon="zi-more-grid-solid" />}
            />
            <BottomNavigation.Item
                key="/timeline"
                label="Nhật ký"
                icon={<Icon icon="zi-clock-1" />}
                activeIcon={<Icon icon="zi-clock-1-solid" />}
            />
            <BottomNavigation.Item
                key="/profile"
                label="Cá nhân"
                icon={<Icon icon="zi-user" />}
                activeIcon={<Icon icon="zi-user-solid" />}
            />
        </BottomNavigation>
    )
}

export default ZaloBottomTabs