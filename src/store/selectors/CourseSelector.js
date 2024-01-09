import { selector } from "recoil";
import { courseState } from "../atoms/CourseAtom";

export const courseDetails = selector({
  key: "courseDetailsState",
  get: ({ get }) => {
    const state = get(courseState);

    return state;
  },
});

export const courseTitle = selector({
  key: "courseTitleState",
  get: ({ get }) => {
    const state = get(courseState);
    if (state) {
      return state.title;
    }
    return "";
  },
});

export const coursePrice = selector({
  key: "coursePriceState",
  get: ({ get }) => {
    const state = get(courseState);
    if (state) {
      return state.price;
    }
    return "";
  },
});

export const courseImage = selector({
  key: "courseImageState",
  get: ({ get }) => {
    const state = get(courseState);
    if (state) {
      return state.imageLink;
    }
    return "";
  },
});
