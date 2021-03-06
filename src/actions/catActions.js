export function fetchCats() {
  console.log('Fetching Cats')
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
  return fetch('http://localhost:4000/db')
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      return responseJSON.images
    })
    .then(payload => dispatch({ type: 'FETCH_CATS', payload }));
  };
}
