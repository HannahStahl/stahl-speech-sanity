export default {
  title: "Resources",
  name: "resources",
  type: "document",
  fields: [
    {
      title: "Resources",
      name: "resources",
      type: "array",
      of: [{ type: "resource" }],
      validation: Rule => Rule.required().min(1),
    },
  ]
};
