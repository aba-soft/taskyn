import { fetchConfirmRequest } from "../adapters";
import { requestState } from "../entities";

export async function confirmRequest(customerId: string) {
  const { error, request } = await fetchConfirmRequest(customerId);
  if (error) {
    //TODO: handle error
  }
  requestState.removeRequest(request.customerId);
}
