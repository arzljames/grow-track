import {
  Baby01Icon,
  BabyBottleIcon,
  DashboardCircleAddIcon,
  DiaperIcon,
  Doctor01Icon,
  InjectionIcon,
  SleepingIcon,
} from "@hugeicons/core-free-icons"

export const navigationLinkItems = [
  {
    sectionTitle: null,
    children: [
      {
        name: "Overview",
        path: "/",
        icon: DashboardCircleAddIcon,
      },
    ],
  },
  {
    sectionTitle: null,
    children: [
      {
        label: "Babies",
        path: "/babies",
        icon: Baby01Icon,
      },
    ],
  },
  {
    label: "Activity",
    children: [
      {
        name: "Feed",
        path: "/activity/feed-tracker",
        icon: BabyBottleIcon,
      },
      {
        name: "Diaper",
        path: "/activity/diaper-tracker",
        icon: DiaperIcon,
      },
      {
        name: "Sleep",
        path: "/activity/sleep-tracker",
        icon: SleepingIcon,
      },
    ],
  },
  {
    label: "Health",
    children: [
      {
        name: "Vaccine Schedule",
        path: "/health/vaccine-schedule",
        icon: InjectionIcon,
      },
      {
        name: "Checkup",
        path: "/activity/Checkup",
        icon: Doctor01Icon,
      },
    ],
  },
]
