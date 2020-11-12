import querystring from "querystring";
import { request } from "../../configures/axios";
import axios from "axios";

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

export async function testGraphql(data) {
  return axios.post('http://a92556a1e943.ngrok.io/graphql', `mutation {
    addNote(input: { params: { title:"${data.title}", body:${data.body} } } ) {
      note {
        id
        title
        body
      }
    }
  }`
  );
}
