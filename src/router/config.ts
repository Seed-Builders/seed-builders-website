const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/volunteer"],
    exact: true,
    component: "Volunteer",
  },
  {
    path: ["/donate"],
    exact: true,
    component: "Donate",
  },
  {
    path: ["/circle-time"],
    exact: true,
    component: "CircleTime",
  },
  {
    path: ["/get-involved"],
    exact: true,
    component: "GetInvolved",
  },
  {
    path: ["/mission"],
    exact: true,
    component: "Mission",
  },
];

export default routes;
