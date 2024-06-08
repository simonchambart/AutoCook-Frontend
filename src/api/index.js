import axiosRoot from 'axios';

const baseUrl = import.meta.env.VITE_APP_URL;

export const axios = axiosRoot.create({
  baseURL: baseUrl,
});

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`; 
  } else {
    delete axios.defaults.headers.Authorization;
  }
};

export const getAll = async (url) => {
  const {
    data,
  } = await axios.get(`${url}`); 

  return data;
};

export const deleteById = async (url, { arg: id }) => {
  await axios.delete(`${url}/${id}`);
};

export const post = async (url, { arg }) => {
  const {
    data,
  } = await axios.post(url, arg);

  return data;
};

export const save = async (url, { arg: body }) => {
  const { id, ...values } = body;
  await axios({
    method: id ? 'PUT' : 'POST',
    url: `${url}/${id ?? ''}`,
    data: values,
  });
};

export const getById = async (url) => {
  const {
    data,
  } = await axios.get(url);

  return data;
};

// Function to record clicks
export const recordClick = async (clickDetail) => {
  await post('/clicks', { arg: { clickDetails: [clickDetail], createdAt: new Date().toISOString() } });
};