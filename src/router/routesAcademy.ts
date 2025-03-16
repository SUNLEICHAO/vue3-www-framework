export default [
  {
    path: "/academy",
    name: "Academy",
    component: () => import(/* webpackChunkName: "academy" */ "@/views/Academy/AcademyIndex.vue")
  },
  {
    path: "/academy/course",
    name: "AcademyCourse",
    component: () => import(/* webpackChunkName: "academy" */ "@/views/Academy/AcademyIndex.vue")
  },
  {
    path: "/academy/camp",
    name: "AcademyCamp",
    component: () => import(/* webpackChunkName: "academy" */ "@/views/Academy/AcademyIndex.vue")
  }
];
