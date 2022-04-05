import axios from "axios";
export const api_key = "f1c556021e1310a96d581c0c87de8ac9";
export const BASE_URL = "http://ws.audioscrobbler.com/2.0";
export const AXIOS_BASE_URL = axios.create({baseURL: "http://ws.audioscrobbler.com/2.0"});

export const fetchArtist = (artistName) => AXIOS_BASE_URL.get(`/?method=artist.getinfo&artist=${artistName}&api_key=${api_key}&format=json`);

export const fetchTopAlbums = (artistName) => AXIOS_BASE_URL.get(`/?method=artist.gettopalbums&artist=${artistName}&api_key=${api_key}&format=json`);

export const fetchTopTracks = (artistName) => AXIOS_BASE_URL.get(`/?method=artist.gettoptracks&artist=${artistName}&api_key=${api_key}&format=json`);