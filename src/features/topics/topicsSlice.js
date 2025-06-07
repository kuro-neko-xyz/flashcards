import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic(state, action) {
      state.topics[action.payload.id] = action.payload;
      state.topics[action.payload.id].quizIds = [];
    },
    addQuiz(state, action) {
      state.topics[action.payload.topicId].quizIds.push(action.payload.id);
    },
  },
});

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
