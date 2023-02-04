import { PetCarer } from "../models/pet_carer";
import { PetOwner } from "../models/pet_owner";
import ProcessIndicator, { initProcessState } from "./types/process_indicator";

export type UserType = "PET_CARER" | "PET_OWNER";

export interface AccountState {
  data?: PetCarer | PetOwner;
  type?: UserType;
}

export interface EntryProcessState {
  registration: ProcessIndicator;
  login: ProcessIndicator;
}

export interface GlobalStore {
  account: AccountState;
  entryProcess: EntryProcessState;
}

export const initialGlobalState: GlobalStore = {
  account: {
    data: undefined,
    type: undefined,
  },
  entryProcess: {
    registration: initProcessState,
    login: initProcessState,
  },
};
