import { secureStorage, storage } from "../../library";
import { fetchPasswordlessVerify } from "../adapters";
import { input, auth } from "../entities";

export async function passwordlessVerify() {
  if (!input.otpNumber) {
    // do error stuff
    // validation here
  }
  const { error, jwt, jwtExpires, refreshExpires, refreshToken, role } =
    await fetchPasswordlessVerify(input.otpNumber);
  if (error) {
    // do some error stuff here
    return;
  }
  if (!jwt || !refreshToken || !refreshExpires || !jwtExpires || !role) {
    return;
  }
  await Promise.all([
    secureStorage.add("refresh_token", refreshToken),
    secureStorage.add("token", jwt),
    storage.add("token_expires_at", `${jwtExpires}`),
    storage.add("refresh_expires_at", `${refreshExpires}`),
    storage.add("role", role),
  ]);
  auth.setRefreshToken(refreshToken);
  auth.setToken(jwt);
  auth.setRefreshExpire(refreshExpires);
  auth.setTokenExpire(jwtExpires);
  auth.setRole(role);
}
