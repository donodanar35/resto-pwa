/* eslint-disable linebreak-style */
import MYCONFIG from './myconfig';

const MY_API_ENDPOINT = {
  LIST: `${MYCONFIG.BASE_URL}list`,
  DETAIL: (id) => `${MYCONFIG.BASE_URL}detail/${id}`,
};

export default MY_API_ENDPOINT;
