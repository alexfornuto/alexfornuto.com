import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="alexfornuto/alexfornuto.com"
      repoId="R_kgDOLZ9bkg"
      category="Announcements"
      categoryId="DIC_kwDOLZ9bks4CeYVW"  // E.g. id of "General"
      mapping="title"                        // Important! To map comments to URL
      term="Where is this line used?"
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

