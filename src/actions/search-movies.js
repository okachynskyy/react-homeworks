import queryString from 'query-string';
import axios from 'axios';

export const SEARCH_MOVIES = 'SEARCH_MOVIES';

export function searchMovies(params) {
  const API_URL = 'http://react-cdp-api.herokuapp.com';
  const url = `${API_URL}/movies?${queryString.stringify(params)}`;
  const request = axios.get(url);

  return {
    type: SEARCH_MOVIES,
    payload: request
  };
};