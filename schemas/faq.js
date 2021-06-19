export default {
  title: "FAQ",
  name: "faq",
  type: "document",
  fields: [
    {
      title: "Questions",
      name: "questions",
      type: "array",
      of: [{ type: "questionAndAnswer" }],
      validation: Rule => Rule.required().min(1),
    },
  ]
};
