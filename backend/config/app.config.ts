export default () => ({
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  },
  mongo_db: {
    url: process.env.MONGO_URI,
    db_name: process.env.MONGO_DB_NAME,
    auth_source: process.env.MONGO_AUTH_SOURCE,
    user: process.env.MONGO_USERNAME || '',
    password: process.env.MONGO_PASSWORD || '',
  },
  jsonwebtoken: {
    jwt_secret: process.env.JWT_SECRET,
  },
  env: process.env.NODE_ENV,
});
