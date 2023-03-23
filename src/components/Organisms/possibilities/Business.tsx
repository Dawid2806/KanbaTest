import React from "react";

export const Business = () => {
  return (
    <div className="flex max-w-[1170px] mx-auto gap-10 my-20 ">
      <div className="w-5/12">
        <p className="text-2xl">
          Enterprise class productivity platform for demanding businesses with
          compliance features, advanced security and even deeper integration
          into the Microsoft ecosystem.
        </p>
      </div>
      <div className="flex  gap-10">
        <ul className="whitespace-nowrap customUL">
          <li>Office 365 integration</li>
          <li>Advanced Productivity</li>
          <li>Advanced Search Value</li>
          <li>Invite external people</li>
          <li>Use KanBo inside your Outlook</li>
          <li>Insights</li>
        </ul>
        <ul className="customUL">
          <li>Microsoft Products Integrations</li>
          <li>Compliance Control</li>
          <li>Active Directory Integration</li>
          <li>Leverage your SharePoint data</li>
          <li>Custom Backend Hosting</li>
          <li>Custom Integrations and Extensions</li>
        </ul>
      </div>
    </div>
  );
};
