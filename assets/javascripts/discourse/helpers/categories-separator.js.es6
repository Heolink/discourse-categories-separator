import { registerUnbound } from 'discourse-common/lib/helpers';

registerUnbound('category-with-separator', (categoryId) => {
  var listCategories = Discourse.SiteSettings.categories_separator_list.split(',')
  return (listCategories.indexOf(categoryId+'') > -1);
});

registerUnbound('category-separator-title', (categoryId) => {
  var listCategories = Discourse.SiteSettings.categories_separator_list.split(',')
  var index = listCategories.indexOf(categoryId+'')
  var listTitle = Discourse.SiteSettings.categories_separator_list_title.split(',')
  console.log(listTitle)
  return listTitle[index]
});
