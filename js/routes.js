import emailList from "./apps/email/pages/email-list.cmp.js";
import emailDetails from "./apps/email/pages/email-details.cmp.js";
import emailCompose from "./apps/email/pages/email-compose.cmp.js";
import homePage from "./pages/app-home.cmp.js";
import emailApp from "./apps/email/pages/email-app.cmp.js";
import notesApp from "./apps/notes/pages/notes-app.cmp.js";
import booksApp from "./apps/books/pages/book-app.cmp.js";
import bookDetails from "./apps/books/pages/book-detailes.cmp.js";
import about from "./pages/app-about.cmp.js";

const myRoutes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/email",
    component: emailApp,
    children: [
      {
        path: "/email/:list?",
        component: emailList,
      },
      {
        path: "/email/compose/new",
        component: emailCompose,
      },
      {
        path: "/email/:list?/:id?",
        component: emailDetails,
      },
    ],
  },
  {
    path: "/notes",
    component: notesApp,
  },
  {
    path: "/books",
	component: booksApp,
  },
  {
	path: "/books/:bookId",
	component: bookDetails,
  },
  {
    path: "/about",
    component: about,
  },
];

export const myRouter = new VueRouter({ routes: myRoutes });
