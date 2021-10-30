module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: process.env.DATABASE_URL || 5432,
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