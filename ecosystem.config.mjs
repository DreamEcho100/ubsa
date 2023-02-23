module.exports = {
  apps: [
    {
      name: "ubsa",
      script: "pnpm",
      args: "run start",
      watch: true,
      ignore_watch: ["node_modules", "logs"],
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
