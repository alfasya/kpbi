module.exports = {
    apps: [
        {
            name: 'kpbi',
            script: 'server.js',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
                DB_URL: 'postgresql://postgres:2121@localhost:5433/kpbi'
            }
        }
    ]
}