class APi {
  getData() {
    return fetch(`${process.env.REACT_APP_URL}${process.env.REACT_APP_API_token}`)
      .then((responce) => {
        return responce.json()
      })
  };
}

export default APi;