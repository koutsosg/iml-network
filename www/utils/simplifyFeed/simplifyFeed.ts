import Slugify from "@utils/Slugify/Slugify";

export const simplifyPodcastData = (data: any) => {
  const podcast = data?.rss?.channel;
  const podslug = Slugify(podcast?.title);
  return {
    podcast: {
      id: podcast["podcast:guid"],
      title: podcast?.title,
      slug: podslug,
      description: podcast?.description,
      copyright: podcast?.copyright,
      funding_url: podcast["podcast:funding"]?.url,
      persons: podcast["podcast:person"]?.map((person: any) => ({
        name: person?._,
        role: person?.role,
        href: person?.href,
        img: person?.img,
      })),
      language: podcast?.language,
      pub_date: podcast?.pubDate,
      transistor_url: podcast?.link,
      image_url: podcast?.image?.url,
      image_title: podcast?.image?.title,
      image_link: podcast?.image?.link,
      categories: podcast["itunes:category"]?.map(
        (category: any) => category?.text
      ),
      author: podcast["itunes:author"],
      keywords: podcast["itunes:keywords"]?.split(", "),
      owner_name: podcast["itunes:owner"]["itunes:name"],
      owner_email: podcast["itunes:owner"]["itunes:email"],
      episodes: podcast?.item?.map((episode: any) => ({
        id: episode?.guid["_"],
        title: episode?.title,
        season: episode["podcast:season"],
        episode_type: episode["itunes:episodeType"],
        link: episode?.link,
        description: episode?.description?.trim(),
        pub_date: episode?.pubDate,
        author: episode?.author,
        media_url: episode?.enclosure.url,
        media_length: episode?.enclosure?.length,
        media_type: episode?.enclosure?.type,
        image_link: episode["itunes:image"]?.href,
        keywords: episode["itunes:keywords"]?.split(", "),
        persons: episode["podcast:person"]?.map((person: any) => ({
          name: person["_"],
          role: person?.role,
          href: person?.href,
          img: person?.img,
        })),
        chapters_url: episode["podcast:chapters"]?.url,
        chapters_type: episode["podcast:chapters"]?.type,
      })),
    },
  };
};
