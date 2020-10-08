# StreamShark demo project

## Installation and starting the app

-   Copy .env.development.example and rename to .env.development
-   Update ACCESS_TOKEN with your access token in the above file
-   Run the command `yarn` in your terminal to install dependencies
-   Run the command `yarn start` in your terminal to start the app, accept any HTTPS security warnings for local development

## Future enhancements

It would be great to add more features to this but for the purpose of a demo and restriction of time the following are not included:

-   Page reactions - substitute names for emoticons
-   Comment reactions styling (same as above)
-   Display video
-   Unit testing
-   Minimize comments on load
-   Handle super long text breaking responsive view
-   Typescript

## References links

Just a few notes for reference while developing this.

#### Getting FB user id

Using the Graph API Explorer (https://developers.facebook.com/tools/explorer) run the following query:

`me?fields=id,name`

### Creating a live video object

https://developers.facebook.com/docs/live-video-api/getting-started/

You can make a POST request to live_videos edge from the following paths:
/{user_id}/live_videos

### Profile image

https://developers.facebook.com/docs/graph-api/reference/user/picture/
