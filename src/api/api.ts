import axios from 'axios';
import { SortBy } from '../types/SortBy';

const API_KEY = 'd6ff71920fb14a81a0ab45f26806576a';
const BASE_URL = 'https://newsapi.org/v2';
const PAGE_SIZE = 1;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
    pageSize: PAGE_SIZE,
  },
});

export const fetchNews = async (page: number, sortBy: SortBy, pageSize: number, searchQuery: string) => {
  try {
    const response = await api.get('/everything', {
      params: {
        page,
        pageSize,
        sortBy,
        q: searchQuery,
      },
    });
    return response.data.articles;
  } catch (error) {
    throw error;
  }
};
