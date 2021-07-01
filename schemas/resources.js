export default {
  title: "Resources",
  name: "resources",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Resources",
      name: "resources",
      type: "array",
      of: [{ type: "resource" }],
      validation: Rule => Rule.required().min(1),
    },
  ]
};
