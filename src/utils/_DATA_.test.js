import { questions, users, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

const validQuestion = {
  optionOneText: "Walk on the moon",
  optionTwoText: "Explore the deep sea",
  author: "Aristotle",
};

const invalidQuestion = {
  optionOneText: "Hug a grizzly bear",
  author: "John Muir",
};

const validAnswer = {
  authedUser: "tylermcginnis",
  qid: "8xf0y6ziyjabvozdd253nd",
  answer: "optionOne",
};

const invalidAnswer = {
  authedUser: "tylermcginnis",
  qid: "8xf0y6ziyjabvozdd253nd",
};

describe("_saveQuestion", () => {
  it("should store valid questions", async () => {
    await _saveQuestion(validQuestion);
    const storedQuestion = Object.values(questions).find(
      (question) => question.author === validQuestion.author
    );
    expect(storedQuestion).toBeDefined();
  });

  it("should return an error when invalid arguments are received", async () => {
    expect.assertions(1);
    try {
      await _saveQuestion(invalidQuestion);
    } catch (e) {
      expect(e).toMatch(
        "Please provide optionOneText, optionTwoText, and author"
      );
    }
  });
});

describe("_saveQuestionAnswer", () => {
  it("should store valid answers", async () => {
    await _saveQuestionAnswer(validAnswer);
    const user = users[validAnswer.authedUser];
    const storedAnswer = user.answers[validAnswer.qid];
    expect(storedAnswer).toBeDefined();
  });

  it("should return an error when invalid arguments are received", async () => {
    expect.assertions(1);
    try {
      await _saveQuestionAnswer(invalidAnswer);
    } catch (e) {
      expect(e).toMatch("Please provide authedUser, qid, and answer");
    }
  });
});
