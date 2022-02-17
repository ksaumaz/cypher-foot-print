module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-235-98-1.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd517t5dqdnd56v'),
      user: env('DATABASE_USERNAME', 'hkghawwlshtcaf'),
      password: env('DATABASE_PASSWORD', '6dc847185b372110908ffd12ca93abdee13d93150d74978c9dbcf72f76b47da5'),
	  ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)},
    },
  },
});
