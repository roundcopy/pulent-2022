import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () => rss({
    stylesheet: '/rss/styles.xsl',
    title: 'Pulent Blog',
    description: 'Nurturing growth while fighting perfectionism',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.date,
      description: post.frontmatter.description
    }))
  });