module.exports = {
  async redirects() {
    return [
      {
        has: [
          {
            type: 'cookie',
            key: 'menu-bolu-skipped-walkthrough',
            value: 'true',
          },
        ],
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ];
  },
};
