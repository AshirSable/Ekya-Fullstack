module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "0415",
  DB: "ekya_db",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
