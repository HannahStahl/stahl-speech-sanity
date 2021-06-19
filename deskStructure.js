import S from "@sanity/desk-tool/structure-builder";

const pages = ['Home', 'About', 'Services', 'FAQ', 'Testimonials', 'Resources', 'Contact'];

const renderListItem = (title) => {
  const documentId = title.toLowerCase();
  return S.listItem()
    .title(title)
    .child(
      S.editor()
        .schemaType(documentId)
        .documentId(documentId)
    );
};

export default () =>
  S.list()
    .title('Content')
    .items(pages.map(renderListItem));