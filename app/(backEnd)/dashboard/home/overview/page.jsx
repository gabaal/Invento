import DashboardBanner from "@/components/dashboard/DashboardBanner";
import SalesOverview from "@/components/dashboard/SalesOverview";
import React from "react";

export default function page() {
  return (
    <div>
      <DashboardBanner />
      <SalesOverview />
      <h2>Overview</h2>
    </div>
  );
}
