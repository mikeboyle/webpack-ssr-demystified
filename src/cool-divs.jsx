const React = require("react");
const CoolDiv = require("./cool-div");

const CoolDivs = ({numOfDivs}) => {
  return (
    <div className="cool-divs">
      {
        [...Array(numOfDivs)].map((_val, i) =>
          <CoolDiv key={i} />
        )
      }
    </div>
  );
};

module.exports = CoolDivs;
