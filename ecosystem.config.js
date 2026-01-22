module.exports = {
    apps: [
        {
            name: 'ps4-backend',
            script: 'src/index.ts',
            interpreter: 'node',
            interpreter_args: '-r ts-node/register',
            env: {
                NODE_ENV: 'production',
                PORT: 4000
            }
        }
    ]
};
