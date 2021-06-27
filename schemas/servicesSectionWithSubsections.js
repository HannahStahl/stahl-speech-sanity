export default {
  title: "Services Section",
  name: "servicesSectionWithSubsections",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },
    {
      title: "Subsection 1",
      name: "subsection1",
      type: "servicesSection",
      validation: Rule => Rule.required(),
    },
    {
      title: "Subsection 2",
      name: "subsection2",
      type: "servicesSection",
      validation: Rule => Rule.required(),
    },
  ],
};
