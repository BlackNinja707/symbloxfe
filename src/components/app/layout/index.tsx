import { Routes, Route } from "react-router-dom";

import StakingBoard from "../staking/StakingBoard";
import StakingMint from "../staking/StakingMint";
import StakingBurn from "../staking/StakingBurn";
import AppHeader from "../header";
import Footer from "../../footer";
import StakingEarn from "../staking/StakingEarn";

const AppLayout = () => {
  return (
    <div className="w-full">
      <AppHeader />
      <div className="pt-[93px]">
        <Routes>
          <Route path="/*" element={<StakingBoard />} />
          <Route path="/mint" element={<StakingMint />} />
          <Route path="/burn" element={<StakingBurn />} />
          <Route path="/earn" element={<StakingEarn />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;