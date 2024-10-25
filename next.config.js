module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        missing: [
          {
            type: 'cookie',
            key: 'menu-bolu-skipped-walkthrough',
            value: 'true',
          },
        ],
        destination: '/guia',
        permanent: false,
      },
    ];
  },
};
