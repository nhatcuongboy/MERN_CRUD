import querystring from "querystring";
import { request } from "../../configures/axios";

export async function addEquipment(data) {
  return request.post(`equipment/create`, data);
}

export async function getEquipments() {
  return request.get(`equipment/list`);
}

export async function getEquipmentById(id) {
  return request.get(`equipment/read/${id}`);
}

export async function editEquipment(id, data) {
  return request.put(`equipment/update/${id}`, data);
}
