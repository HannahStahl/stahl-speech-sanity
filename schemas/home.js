export default {
  title: "Home",
  name: "home",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
  ]
};
