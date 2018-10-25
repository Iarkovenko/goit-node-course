const dbUser = "admin";
const dbPassword = "qwerty12345";

const config = {
  port: 8080,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb://${ dbUser }:${ dbPassword }@ds137913.mlab.com:37913/iarkovenko-nodejs`
};

module.exports = config;