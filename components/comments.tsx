import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="hbela/nextjs-velite-blog-template"
      repoId="R_kgDOMk9feg"
      category="General"
      categoryId="DIC_kwDOMk9fes4ChwPI"
      mapping="pathname"
      term="Welcome !"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
