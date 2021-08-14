import React from "react";

const EspecificationsList = ({ dataList = [] }) => {
  return (
    <div className="columns mt-1 is-mobile is-multiline especification-list">
      {dataList.map((item, key) => (
        <React.Fragment key={key}>
          <div className="column is-5 item-list">
            <p>{item.title}</p>
          </div>
          <div className="column is-7 item-list">
            <p>{item.description}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default EspecificationsList;
