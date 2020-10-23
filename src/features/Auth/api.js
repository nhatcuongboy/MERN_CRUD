import querystring from "querystring";
import { request } from "../../configures/axios";

export async function login(data) {
  return request.post(`signin`, data);
}
