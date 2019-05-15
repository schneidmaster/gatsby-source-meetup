# Note

When I wrote this package, I somehow didn't notice that [gatsby-source-meetup](https://www.npmjs.com/package/gatsby-source-meetup) already exists. It fills the same purpose and has more advanced configuration options so I recommend you use that. Just leaving the source code on GitHub for posterity since I already wrote it.

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
      resolve: "gatsby-source-meetup",
      options: {
        meetupSlug: "your-meetup"
      }
    }
  ]
};
```

You can then query `allMeetupEvents` to fetch event data:

```graphql
query {
  allMeetupEvents {
    edges {
      node {
        name
        time
        duration
        venue {
          name
          address1
          city
          state
        }
      }
    }
  }
}
```

You can reference [Meetup's API documentation](https://www.meetup.com/meetup_api/docs/2/events) for a full list of fields that can be queried; note that you will need to use camelCased field names in the query (even though they are snake_cased in Meetup's documentation).

## Contributing

1. Fork the repository (https://github.com/schneidmaster/gatsby-source-meetup/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new pull request on GitHub
