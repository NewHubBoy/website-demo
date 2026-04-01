module.exports = {
  apps: [
    {
      name: 'gucci-demo',
      script: 'server.js',
      cwd: './.next/standalone',
      instances: 1,           // fork 模式只能单实例（对于普通演示足够了）
      exec_mode: 'fork',      // <-- 必须改为了 fork 模式！
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
        HOSTNAME: '0.0.0.0',
      },
    },
  ],
};
