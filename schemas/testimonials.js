export default {
  title: "Testimonials",
  name: "testimonials",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Testimonials",
      name: "testimonials",
      type: "array",
      of: [{ type: "testimonial" }],
      validation: Rule => Rule.required().min(1),
    },
  ]
};
