const url = 'https://api.coincap.io/v2'

function getAssets() { // usando fetch
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json()) //la respuesta la tendremos de forma de json
    .then(res => res.data)
}

export default {
  getAssets
}