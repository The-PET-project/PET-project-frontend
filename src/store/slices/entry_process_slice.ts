import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";
import { EntryProcessState, initialGlobalState, UserType } from "../state";
import {
  processStarted,
  processFinishedWithSuccess,
  processFinishedWithError,
} from "../types/process_indicator";

export interface RegistrationPayload {
  user: User;
  userType: UserType;
}

const entryProcessSlice = createSlice({
  name: "entryProcess",
  initialState: initialGlobalState.entryProcess,
  reducers: {
    registrationStarted: (
      state: EntryProcessState,
      action: PayloadAction<RegistrationPayload>
    ) => {
      return {
        ...state,
        registration: processStarted,
      };
    },
    registrationEnded: (
      state: EntryProcessState,
      action: PayloadAction<boolean>
    ) => {
      return {
        ...state,
        registration: action.payload
          ? processFinishedWithSuccess
          : processFinishedWithError,
      };
    },
  },
});

export const { registrationStarted, registrationEnded } =
  entryProcessSlice.actions;

export default entryProcessSlice.reducer;
