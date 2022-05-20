# insomnia-plugin-requests-desktop-notification

This is an Insomnia plugin which creates a new "Send All Requests" action in the dropdown menu for a folder. Selecting that option will have Insomnia send all the API requests in that folder and then display a desktop notification on your machine once all the requests have completed.

This may be useful when running a long set of requests and wanting to be notified once the job is complete.

## Installation

1. Open your Insomnia desktop app
2. Click the gear icon in the top-right corner of the screen
3. Click the "Plugins" tab
4. Search for the plugin name (`insomnia-plugin-requests-desktop-notification`)
5. Click the "Install Plugin" button

## Usage

1. In the "Debug" area of Insomnia, create a new folder and add some requests to it (or find an existing folder if you already have one)
2. Click the dropdown trigger button to the right of the folder name
3. Choose the "Send All Requests" menu item
4. All the requests in your folder will now be sent
5. Once all the requests have completed, a desktop notification will appear on your machine

## Resources

- [Introduction to Insomnia Plugins](https://docs.insomnia.rest/insomnia/introduction-to-plugins)
- [Insomnia Plugins Hooks and Actions](https://docs.insomnia.rest/insomnia/hooks-and-actions)
- [Insomnia Plugin Hub](https://insomnia.rest/plugins)
- [node-notifier npm package](https://www.npmjs.com/package/node-notifier)
