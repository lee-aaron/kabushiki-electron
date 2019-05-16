import type { GetState, Dispatch } from '../reducers/types';

export const AUTH = "AUTH";

export function getAuth() {
  return {
    type: AUTH,
    payload: "https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi&client_id=KABUSHIKI-C%40AMER.OAUTHAP"
  };
}