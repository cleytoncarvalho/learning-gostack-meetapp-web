export function comiSuaMaeRequest(name) {
  return {
    type: '@auth/NAME_REQUEST',
    payload: { name },
  };
}

export function comiSuaMaeSuccess(name) {
  return {
    type: '@auth/NAME_SUCCESS',
    payload: { name },
  };
}
