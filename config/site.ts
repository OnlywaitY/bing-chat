export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Bing chat",
  description:
    "A web client of bing chat",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "",
    github: "https://github.com/OnlywaitY",
    blog: "https://onlywaityblog.netlify.app",
    docs: "",
  },
  bingClient: "localhost:65432"
}
