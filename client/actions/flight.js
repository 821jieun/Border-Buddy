import axios from 'axios';
import { SET_FLIGHT } from '../constants';

export const setFlight = flight => ({ type: SET_FLIGHT, flight });

export const updateFlight = flight => dispatch => {
  console.log("FLIGHT UPDATE GOES HERE!", flight);
}