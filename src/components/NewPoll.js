import { useState } from "react";
import { handleNewPoll } from "../actions/polls";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ authedUser, dispatch }) => {
  const navigate = useNavigate();

  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const optionOneChanged = (e) => {
    const text = e.target.value;
    setOptionOne(text);
  };

  const optionTwoChanged = (e) => {
    const text = e.target.value;
    setOptionTwo(text);
  };

  const submitChoice = (e) => {
    e.preventDefault();

    dispatch(
      handleNewPoll({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authedUser,
      })
    );

    setOptionOne("");
    setOptionTwo("");

    navigate("/");
  };

  return (
    <div className="center">
      <h2>Would you rather</h2>
      <h6>Create your own poll</h6>
      <div>
        <span>First Option</span>
        <input
          type="text"
          placeholder="Option One"
          onChange={optionOneChanged}
        ></input>
      </div>
      <div>
        <span>Second Option</span>
        <input
          type="text"
          placeholder="Option Two"
          onChange={optionTwoChanged}
        ></input>
      </div>

      <button className="btn" onClick={(e) => submitChoice(e)}>
        Submit
      </button>
    </div>
  );
};

const mapStatetoProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStatetoProps)(NewPoll);
