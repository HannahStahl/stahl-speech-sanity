export default {
  title: "Services",
  name: "services",
  type: "document",
  fields: [
    {
      title: "Section 1",
      name: "section1",
      type: "servicesSection",
      validation: Rule => Rule.required(),
    },
    {
      title: "Section 2",
      name: "section2",
      type: "servicesSectionWithSubsections",
      validation: Rule => Rule.required(),
    },
    {
      title: "Section 3",
      name: "section3",
      type: "servicesSection",
      validation: Rule => Rule.required(),
    },
  ]
};
