const fetch = require("node-fetch");
const { camelizeKeys } = require("humps");

const logError = message => console.error(`gatsby-source-meetup: ${message}`);

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId, createContentDigest },
  { meetupSlug }
) => {
  // Ensure we were given a string for the meetupSlug.
  if (!meetupSlug) {
    logError("required option `meetupSlug` is missing");
    return;
  }
  if (typeof meetupSlug !== "string") {
    logError(
      `required option \`meetupSlug\` must be a string, but value of type '${typeof meetupSlug}' was provided`
    );
    return;
  }

  // Fetch Meetup events for the group.
  const response = await fetch(
    `https://api.meetup.com/${meetupSlug}/events?status=past,upcoming`
  );

  // Check response status.
  if (response.status !== 200) {
    const body = await response.text();
    logError("error fetching Meetup events:", body);
    return;
  }

  // Check response body.
  const json = await response.json();
  if (json.errors) {
    logError("error fetching Meetup events:", json.errors);
    return;
  }

  // Create a node for each event.
  camelizeKeys(json).forEach(event => {
    const node = {
      ...event,
      meetupId: event.id,
      id: createNodeId(event.id),
      parent: null,
      children: [],
      internal: {
        type: "MeetupEvents"
      }
    };

    const contentDigest = createContentDigest(node);
    node.internal.contentDigest = contentDigest;
    createNode(node);
  });
};
