import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider, Page } from "zmp-ui";
import { RecoilRoot } from "recoil";
import HomePage from "pages/home/HomePage";
import NewDetailPage from "pages/news/NewDetailPage.view";
import DiscoverPage from "pages/discovery/DiscoveryPage";
import TimeLinePage from "pages/timeline/TimeLinePage";
import ZaloBottomTabs from "./bottom-tabs";
import ProfilePage from "pages/profile/ProfilePage";
import SettingPage from "pages/setting/SettingPage";
import InputList from "./input-list";


const MyApp = () => {
  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <Page>
              <AnimationRoutes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/news" element={<NewDetailPage />}></Route>
                <Route path="/discovery" element={<DiscoverPage />}></Route>
                <Route path="/timeline" element={<TimeLinePage />}></Route>
                <Route path="/profile" element={
                  <Suspense fallback='Loading...'>
                    <ProfilePage />
                  </Suspense>
                }></Route>
                <Route path="/setting" element={<SettingPage />}></Route>
                <Route path="/form" element={<InputList />}></Route>
              </AnimationRoutes>
              <ZaloBottomTabs />
            </Page>

          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};
export default MyApp;
