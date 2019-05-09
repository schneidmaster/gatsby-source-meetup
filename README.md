# gatsby-source-meetup

Fetches events from the Meetup.com API. Useful when you are building a website for a Meetup group and wish to display information about upcoming events.

## Installation

```
npm install gatsby-source-meetup --save
```

or

```
yarn add gatsby-source-meetup
```

## Usage

Add the plugin to your `gatsby-config.js`. There is one required option, `meetupSlug`, which is the unique slug of your Meetup.com group. If your group is at `https://www.meetup.com/Awesome-Coders` then your `meetupSlug` is `'Awesome-Coders'`.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-apiserver",
      options: {
        meetupSlug: "your-meetup"
      }
    }
  ]
};
```

## Contributing

1. Fork the repository (https://github.com/schneidmaster/gatsby-source-meetup/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request on GitHub
