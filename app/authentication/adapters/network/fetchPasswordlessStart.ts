import { request, storage, toString } from "../../../library";
import { adapterTypes } from "../../types";
import * as Device from "expo-device"; // TODO: move data to usecase
import { Platform } from "react-native";
import { nanoid } from "nanoid";
export async function fetchPasswordlessStart(
  phoneNumber: string
): Promise<adapterTypes.IFetchPasswordlessStartResult> {
  const deviceUniqueId = storage.retrieve("device_id", "string");
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/authnz/passwordless/start",
    method: "POST",
    body: {
      phoneNumber,
      deviceUniqueId: deviceUniqueId || nanoid(64), ////
      isDevice: Device.isDevice,
      platform: Platform.OS, ////
      brand: Device.brand,
      manufacturer: Device.manufacturer,
      model: Device.modelName,
      modelId: Device.modelId,
      designName: Device.designName,
      productName: Device.productName,
      deviceYearClass: Device.deviceYearClass,
      supportedCpuArch: Device.supportedCpuArchitectures?.join(","),
      os: Device.osName,
      osVersion: Device.osVersion,
      osBuildId: Device.osBuildId,
      osInternalBuildId: Device.osInternalBuildId,
      androidApiLevel: Device.platformApiLevel,
      deviceName: Device.deviceName,
    },
  });
  if (!success) {
    return {
      error: error || "",
      otpToken: "",
      deviceId: "",
    };
  }
  return {
    otpToken: toString(payload?.otpToken),
    deviceId: toString(payload?.deviceId),
    error: "",
  };
}
