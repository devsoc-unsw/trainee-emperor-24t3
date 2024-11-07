import config from './config.json';

/**
 * Make the API request call to the relevant route to the backend
 * @param route The backend route to request
 * @param method The CRUD method
 * @param body The body details to pass in
 */
export const makeRequest = async (route, method, body, token) => {
  const options = {
    method,
    headers: {
      'Content-type': 'application/json',
      Authorization: token ? 'Bearer ' + token : ''
    },
  };
  if (body !== undefined) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`http://localhost:${config.BACKEND_PORT}${route}`, options);
  const data = await response.json();
  if (data.error) {
    // errorsSetter([...errors, data.error]);
  } else {
    return data;
  }
}