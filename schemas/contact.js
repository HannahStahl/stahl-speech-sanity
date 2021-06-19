export default {
  title: "Contact",
  name: "contact",
  type: "document",
  fields: [
    {
      title: "Note",
      name: "note",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
  ],
};
