module.exports = {
  dialect: "sqlite",
  storage: "./src/database/db.sqlite",
  logging: false,
  define: {
    underscored: true,
    underscoredAll: true
  }
};