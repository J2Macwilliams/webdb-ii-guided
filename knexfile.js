// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/produce.db3'
    },
    migrations: {
      directory: './data/migrations' // will be created automatically
    },
    seeds: {
      directory: './data/seeds/veggies'//also created automatically
    }
  },


};
