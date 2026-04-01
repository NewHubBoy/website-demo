module.exports = {
  apps: [
    {
      name: 'gucci-demo', // 你可以在 pm2 中用来管理进程的名字
      script: 'node',
      args: '.next/standalone/server.js', // Next.js standalone 模式产物
      instances: 'max', // 使用所有 CPU 核心 (Cluster 模式)
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
        HOSTNAME: '0.0.0.0', // 允许所有 IP 访问
      },
    },
  ],
};
