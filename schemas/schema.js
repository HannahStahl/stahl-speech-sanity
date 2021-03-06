import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import home from './home';
import about from './about';
import servicesSection from './servicesSection';
import servicesSectionWithSubsections from './servicesSectionWithSubsections';
import services from './services';
import questionAndAnswer from './questionAndAnswer';
import faq from './faq';
import testimonial from './testimonial';
import testimonials from './testimonials';
import resource from './resource';
import resources from './resources';
import contact from './contact';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    home,
    about,
    servicesSection,
    servicesSectionWithSubsections,
    services,
    questionAndAnswer,
    faq,
    testimonial,
    testimonials,
    resource,
    resources,
    contact,
  ]),
});
