import axios from "axios";
import type { Home } from "../types/home";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getHomes = async () => (await api.get<Home[]>("/homes")).data;

export const getHomeById = async (id: number) =>
  (await api.get<Home>(`/homes/${id}`)).data;

export const createHome = async (home: Home) =>
  (await api.post<Home>("/homes", home)).data;

export const updateHome = async (id: number, home: Home) =>
  (await api.put<Home>(`/homes/${id}`, home)).data;

export const deleteHome = async (id: number) =>
  (await api.delete(`/homes/${id}`)).data;
