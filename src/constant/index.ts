import {
  Activity02Icon,
  Baby01Icon,
  DashboardCircleAddIcon,
  HealthIcon,
} from "@hugeicons/core-free-icons"

export const navigationLinkItems = [
  {
    label: "Overview",
    path: "/",
    icon: DashboardCircleAddIcon,
    children: [],
  },
  {
    label: "Babies",
    path: "/babies",
    icon: Baby01Icon,
    children: [],
  },
  {
    label: "Activity",
    path: null,
    icon: Activity02Icon,
    children: [
      {
        name: "Feed",
        path: "/activity/feed-tracker",
      },
      {
        name: "Diaper",
        path: "/activity/diaper-tracker",
      },
      {
        name: "Sleep",
        path: "/activity/sleep-tracker",
      },
    ],
  },
  {
    label: "Health",
    path: null,
    icon: HealthIcon,
    children: [
      {
        name: "Vaccine Schedule",
        path: "/health/vaccine-schedule",
      },
      {
        name: "Checkup",
        path: "/activity/Checkup",
      },
    ],
  },
]
