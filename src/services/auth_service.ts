import httpClient from "./configs/axios_client";
import { User } from "../models/user";
import { UserType } from "../store/state";

export function registrateAccount(user: User, userType: UserType) {
  return httpClient
    .post(`/auth/registration/${userType}`, { data: user })
    .then((res) => {
      if (res.status === 200 || res.status === 201) {
        return res.data;
      } else {
        return null;
      }
    });
}
