import React, { useState } from "react";

const Tabs = ({ tabsList = [] }) => {
  const [currentTab, setCurrentTab] = useState(tabsList[0]);

  const handleCurrentTab = (currentTab) => {
    setCurrentTab(currentTab);
  };

  const TabsButtons = () => {
    return (
      <div className="tabs__buttons_section mt-5">
        {tabsList.map((tab, idx) => (
            <div
              key={idx}
              className={`tabs__button ${
                tab === currentTab ? "tabs__active" : ""
              }`}
              onClick={() => handleCurrentTab(tab)}
            >
              {tab.title}
            </div>
        ))}
      </div>
    );
  };

  const TabContent = ({ content }) => {
    return (
      <div className="columns tabs__content mt-1">
        <div className="column">
          <p>{content}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TabsButtons />
      <TabContent content={currentTab.content} />
    </div>
  );
};

export default Tabs;
