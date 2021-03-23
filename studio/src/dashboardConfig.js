export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6059fa816454b7667639244e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-x7zvq8s4",
                  apiId: "f1a12ced-d124-4004-bbbf-b1a6a54ae03f",
                },
                {
                  buildHookId: "6059fa81e095513a3f2a66a7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-p3tky8r5",
                  apiId: "5692202f-0694-4132-ab7c-f49a5ea17c03",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/naresh-vunnam77/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-p3tky8r5.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
