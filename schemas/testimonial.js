export default {
  title: "Testimonial",
  name: "testimonial",
  type: "object",
  fields: [
    {
      title: "Quote",
      name: "quote",
      type: "text",
      validation: Rule => Rule.required(),
    },
    {
      title: "Source",
      name: "source",
      type: "string",
      validation: Rule => Rule.required(),
    },
  ],
};
