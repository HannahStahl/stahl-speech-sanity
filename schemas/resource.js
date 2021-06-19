export default {
  title: "Resource",
  name: "resource",
  type: "object",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: Rule => Rule.required(),
    },
  ],
};