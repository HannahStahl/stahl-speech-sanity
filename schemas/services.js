export default {
  title: "Services",
  name: "services",
  type: "document",
  fields: [
    {
      title: "Section 1",
      name: "section1",
      type: "object",
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
      ],
      validation: Rule => Rule.required(),
    },
    {
      title: "Section 2",
      name: "section2",
      type: "object",
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
      ],
      validation: Rule => Rule.required(),
    },
  ]
};
