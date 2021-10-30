module.exports = {
  dialect: 'postgres',
  databaseUrl: process.env.DATABASE_URL || 'localhost:5432',
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