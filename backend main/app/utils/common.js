const BearerToken = (token) => {
  const tok = token.split("Bearer ")[1];

  return tok
}

module.exports = {
  BearerToken
}
