module.exports = {
  dialect: 'postgres',
  databaseUrl: 'localhost:5432' || process.env.DATABASE_URL,
  username: 'postgres',
  password: 'postgres',
  database: 'criticism_app_development',
  ssl: {
    rejectUnauthorized: false
  },
  define: {
    timestamps: true,
    underscored: true
  }
}