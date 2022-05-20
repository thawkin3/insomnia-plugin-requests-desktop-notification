const notifier = require('node-notifier');
const path = require('path');

module.exports.requestGroupActions = [
  {
    label: 'Send All Requests',
    action: async (context, data) => {
      const { requests } = data;

      for (const request of requests) {
        await context.network.sendRequest(request);
      }

      notifier.notify({
        title: 'Insomnia Requests Complete',
        message: `Finished sending all ${requests.length} requests!`,
        icon: path.join(__dirname, 'insomnia-logo.png'),
        sound: true,
      });
    },
  },
];
