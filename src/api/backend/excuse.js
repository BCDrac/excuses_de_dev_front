import apiBackEnd from './api.backend';
import { URL_BACK_GET_RANDOM_EXCUSE, URL_BACK_GET_ALL_EXCUSES, URL_BACK_GET_ALL_EXCUSES_PAGEABLE, URL_BACK_CREATE_EXCUSE } from './../../shared/constants/urls/urlBackend';

export function getRandomExcuse() {
    return apiBackEnd.get(URL_BACK_GET_RANDOM_EXCUSE)
}

export function getAllExcuses() {
    return apiBackEnd.get(URL_BACK_GET_ALL_EXCUSES)
}

export function getAllExcusesInPages(page) {
    return apiBackEnd.get(URL_BACK_GET_ALL_EXCUSES_PAGEABLE + "?page=" + page + "&size=10")
}

export function createExcuse(values) {
    return apiBackEnd.post(URL_BACK_CREATE_EXCUSE, values)
}