import { fetchPasswordlessStart, validatePhoneNumber } from "../adapters";
import { inputState, authState } from "../entities";
import { storage } from "../../library";
export async function passwordlessStart() {
  if (inputState.phoneNumber && inputState.phoneNumber.length >= 10) {
    const isPhoneValid = validatePhoneNumber(inputState.phoneNumber);
    if (!isPhoneValid) {
      inputState.setPhoneValidation(["شماره تماس اشتباه است."]);
    } else {
      inputState.setPhoneValidation([]);
    }
    if (isPhoneValid) {
      const { otpToken, error, deviceId } = await fetchPasswordlessStart(
        inputState.phoneNumber
      );
      if (error) {
        inputState.setPhoneValidation([error]);
        return;
      }
      if (otpToken) {
        authState.setOtpToken(otpToken);
        storage.add("device_id", deviceId);
        return;
      }
    }
  }
}
