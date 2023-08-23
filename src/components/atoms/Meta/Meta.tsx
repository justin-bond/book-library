import { useEffect, useState } from "react";
import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  type?: string;
  noRobots?: boolean;
}

const Meta = ({
  title,
  description,
  imageUrl,
  noRobots = false,
  type = "website",
}: MetaProps) => {
  const [ogUrl, setOgUrl] = useState("");
  const ogTitle = title || null;
  const ogDescription = description || null;
  const ogImage = imageUrl || null;

  useEffect(() => {
    setOgUrl(window.location.href);
  }, []);

  return (
    <Head>
      {noRobots && (
        <meta name="robots" content="noindex" data-testid="Meta-noIndex" />
      )}

      {ogTitle && (
        <>
          <title>{ogTitle}</title>
          <meta property="og:title" content={ogTitle} key="title" />
          <meta property="twitter:title" content={ogTitle} />
          <meta itemProp="name" content={ogTitle} />
        </>
      )}

      {ogDescription && (
        <>
          <meta
            key="description"
            name="description"
            property="description"
            content={ogDescription}
          />
          <meta
            property="og:description"
            content={ogDescription}
            key="og:description"
          />
          <meta property="twitter:description" content={ogDescription} />
          <meta itemProp="description" content={ogDescription} />
        </>
      )}

      {ogImage && (
        <>
          <meta itemProp="image" content={ogImage} />
          <meta property="og:image" content={ogImage} key="og:image" />
          <meta property="twitter:image" content={ogImage} />
          <meta
            property="og:image:secure"
            content={ogImage}
            key="og:image:secure"
          />
        </>
      )}

      {type && (
        <>
          <meta property="og:type" content={type} key="og:type" />
        </>
      )}

      {ogUrl && (
        <>
          <meta property="og:url" content={ogUrl} key="og:url" />
        </>
      )}

      <meta property="twitter:card" content="summary" />
    </Head>
  );
};

export default Meta;
