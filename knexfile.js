// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:'postgressql://postgres:postgres@localhost:5432/menuDB'
  },
  test: {
    client: 'pg',
    connection:'postgressql://postgres:postgres@localhost:5432/test-menuDB'
    },
    production:{
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  };
