import React from "react";
import ReactMarkdown from "react-markdown";
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stat
      </h1>
      <ReactMarkdown>
        {`![LeetCode Stats](https://leetcard.jacoblin.cool/Suhailsama?theme=dark&font=Noto%20Sans%20Buhid&ext=heatmap)`}
      </ReactMarkdown>
    </Row>
  );
};

export default Leetcode;
