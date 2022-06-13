export type ENV = {
  API_URI: string;
  WS_URI: string;
};

const API_DOMAIN = '192.168.0.6';
const API_PORT = 3000;
const WS_PORT = 3000;

export const env: ENV = {
  API_URI: `http://${API_DOMAIN}:${API_PORT}/graphql`,
  WS_URI: `ws://${API_DOMAIN}:${WS_PORT}/graphql`,
};
