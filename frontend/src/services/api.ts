import axios from 'axios';
import { axiosInstance } from './authHeader';

const API_URL = 'https://localhost:7001'; // Replace with your actual API URL

export const get = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (endpoint: string, data: any) => {
  console.log(data);
  try {
    const response = await axiosInstance.post(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (endpoint: string, data: any) => {
  try {
    const response = await axiosInstance.put(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const del = async (endpoint: string) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
