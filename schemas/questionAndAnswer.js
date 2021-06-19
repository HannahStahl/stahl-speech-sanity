export default {
  title: "Question and Answer",
  name: "questionAndAnswer",
  type: "object",
  fields: [
    {
      title: "Question",
      name: "question",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Answer",
      name: "answer",
      type: "array",
      of: [{ type: "block" }],
      validation: Rule => Rule.required(),
    },
  ],
};
