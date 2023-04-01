import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

export const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 7,
  page: 0,
  centerAlign: true,
  firstItemClassName: 'first-page',
  lastItemClassName: 'last-page',
  usageStatistics: false,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

// export const pagination = new Pagination('pagination', options);



// export default function startPaginationBox(total_results) {
//   pagination.setTotalItems(total_results);

//   console.log(pagination.getCurrentPage());

//   pagination.on('afterMove', event => {
//     const currentPage = event.page;
//     console.log(currentPage);
//   });
// }