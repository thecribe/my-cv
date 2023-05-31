import React, { useEffect, useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const JobDescription = (props) => {
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);
  const [end, setEnd] = useState(3);
  const [start, setStart] = useState(0);
  // const [counter, setCounter] = useState(0);

  let newarr = [];
  for (
    let i = start;
    i < (end <= props.desc.length ? end : props.desc.length);
    i++
  ) {
    newarr.push(props.desc[i]);
  }

  const navHandler = (e) => {
    if (e === "left") {
      if (start === 0) {
        setLeft(true);
        setRight(false);
      } else {
        setStart(start - 3);
        setEnd(end - 3);
        setLeft(false);
        setRight(false);
      }
    } else if (e === "right") {
      if (end < props.desc.length) {
        setRight(false);
        setLeft(false);
        setEnd(end + 3);
        setStart(start + 3);
      }
    }
  };

  useEffect(() => {
    if (start === 0) {
      setLeft(true);
      setRight(false);
    }
  }, [start]);

  useEffect(() => {
    if (end > props.desc.length) {
      setRight(true);
      setLeft(false);
    }
  }, [end]);
  //

  let output = newarr.map((desc, i) => {
    return (
      <div className="job-description" key={i}>
        <div className="desc">
          <div className="desc-icon">
            <h1>
              <BsPersonWorkspace />
            </h1>
            <div className="desc-title">
              <h4>
                {desc.date.start_date} - {desc.date.end_date}
              </h4>
              <h4>{desc.role}</h4>
              <h4>{desc.company}</h4>
            </div>
          </div>
          <p>{desc.description}</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="desc_navigation">
        <button
          className="btn"
          disabled={left}
          onClick={() => navHandler("left")}
        >
          <FaAngleLeft /> Prev
        </button>
        <button
          className="btn"
          disabled={right}
          onClick={() => navHandler("right")}
        >
          Next <FaAngleRight />
        </button>
      </div>
      {output}
    </>
  );
};

export default JobDescription;
