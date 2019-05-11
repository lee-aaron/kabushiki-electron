import type { GetState, Dispatch } from '../reducers/types';

export const SET_BROKERAGE = "SET_BROKERAGE";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASS = "SET_PASS";

export function setBrokerage(brokerage) {
  return {
    type: SET_BROKERAGE,
    brokerage
  };
}

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email
  };
}

export function setPass(pass) {
  return {
    type: SET_PASS,
    pass
  };
}