export default {
  title: "About",
  name: "about",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Bio",
      name: "bio",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
  ]
};
