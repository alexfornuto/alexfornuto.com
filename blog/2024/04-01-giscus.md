---
title: "Adding Comments to Docusaurus Sites"
date: "2024-04-01"
categories: 
  - "tech"
---

After recently moving my site from WordPress to Docusaurus, I decided I wanted a comments feature. Not because I got many comments before, nor have I written here in years (something I hope to write about soon), but for the challenge.

Docusaurus is a static site generator (**SSG**), so self-hosted comments seem impossible. And I find tools like Discus distasteful since they use a single login one can be tracked across multiple domains.

Today I found [giscus](https://giscus.app/), and had it set up in less than an hour. It uses GitHub's API to treat the discussions section of a repository as a data source for comments.

While I have my own issues with GitHub post-acquisition, it's a far better solution than tying in Discus, Google, or Facebook to my site. And since I use Docusaurus for professional documentation sites, it's a nice lower barrier to entry for non-technical folks to engage with content, and only one extra click to turn a discussion item into an issue. So my blog made for a perfect sandbox to test it out.

One of the most prominent search result for a guide is behind Medium's paywall, so I figured I'd write up the process myself.

<!-- truncate -->

Since my blog is just that, not a documentation site, I'm applying this comments feature to blog pages. To apply this to docs pages you'd likely replace `BlogPostItem` in the steps below with `DocItem`, though I haven't yet tested to confirm.

## Define the Component

1. Begin at [giscus.app](https://giscus.app), which will guide you through the process of authorizing the bot, preparing a repository, and collecting the details needed. Come back here when you get to the **Enable giscus** section, which is where we begin the custom setup for Docusaurus.

1. Define a new `GiscusComponent` component at `src/components/GiscusComponents/index.js`:

    ```jsx
    import React from 'react';
    import Giscus from "@giscus/react";
    import { useColorMode } from '@docusaurus/theme-common';

    export default function GiscusComponent() {
      const { colorMode } = useColorMode();

      return (
        <Giscus    
          repo="ghUsername/repoName"
          repoId="someHash"
          category="Announcements"
          categoryId="someHash"
          mapping="title"
          term="specific-term" //If you didn't select "Discussion title contains a specific term", omit.
          strict="0"
          reactionsEnabled="1"
          emitMetadata="1"
          inputPosition="top"
          theme={colorMode}
          lang="en"
          loading="lazy"
          crossorigin="anonymous"
          async
        />
      );
    }
    ```

    Replace the values with those provided by giscus.app.

## Swizzle BlogItems

In Docusaurus terms, to "swizzle" is to extract a component of Docusaurus into your managed code base, so that you can make modifications. Their documentation and CLI will warn you numerous times that this is dangerous, but I've yet to encounter issues after many a swizzles.

1. From your docusaurus directory, "swizzle" the `BlogPostItem` component:

    ```sh
    npm run swizzle @docusaurus/theme-classic BlogPostItem -- --wrap
    ```

    The `--wrap` flag indicates that we're not taking out the entire component into our code base. Rather, we're creating a file that imports the original component and lets you add features around it.

    Note that this will show the comments on the main blog page under each excerpt, depending on your site's configuration. If you want it to only show on a specific posts' page and find the correct component to swizzle, please let me know in the comments.

1. Open the newly created file at `src/components/theme/BlogPostItem/index.js` and import your new component:

    ```jsx
    import React from 'react';
    import BlogPostItem from '@theme-original/BlogPostItem';
    import GiscusComponent from '@site/src/components/GiscusComponent';
    ```

1. Directly under the `BlogPostItem` line, add the new component:

    ```jsx
    export default function BlogPostItemWrapper(props) {
    return (
        <>
        <BlogPostItem {...props} />
        <GiscusComponent />
        </>
    );
    ```

That's it! Check your local preview for the comments window, it should look just like the one at the bottom of this page (depending on your color scheme).

