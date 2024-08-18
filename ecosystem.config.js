module.exports = {
    apps: [
        {
            name: "portfolio-prod",
            script: "yarn",
            args: "start",
            interpreter: "/bin/bash",
            env: {
                NODE_ENV: "production",
            },
        },
        {
            name: "portfolio-dev",
            script: "yarn",
            args: "dev",
            interpreter: "/bin/bash",
            watch: true,
        },
    ],
};
