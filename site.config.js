const CONFIG = {
  // profile setting (required)
  profile: {
    name: "gmkim",
    image: "https://raw.githubusercontent.com/dev-minnn/morethan-log/75ff1db9b391337cc992475f7af75063846b62e1/%E1%84%91%E1%85%B5%E1%86%BC%E1%84%80%E1%85%AE.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend Developer",
    bio: "鈍筆勝聰 📚",
    email: "gmkim.dev@gmail.com",
    linkedin: "gmkim20713",
    github: "gmkim20713",
    instagram: "",
  },
  projects: [
    {
      name: `mafoo`,
      href: "https://github.com/YAPP-Github/mafoo-backend",
    },
  ],
  // blog setting (required)
  blog: {
    title: "gmkim's devlog",
    description: "Archive for TILs",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2020, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://raw.githubusercontent.com/dev-minnn/morethan-log/75ff1db9b391337cc992475f7af75063846b62e1/%E1%84%91%E1%85%B5%E1%86%BC%E1%84%80%E1%85%AE.svg", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
