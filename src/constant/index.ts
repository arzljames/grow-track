import {
  AiImageIcon,
  ArtificialIntelligence08Icon,
  Baby01Icon,
  BabyBottleIcon,
  Calendar02Icon,
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

export const servicesCardData = [
  {
    title: "Smart Daily Baby Tracking",
    description:
      "Log feeding, sleep, and diaper changes easily. Stay organized and track your baby’s daily routine.",
    icon: Calendar02Icon,
    iconColor: "#3d876a",
  },
  {
    title: "Vaccination & Health Scheduler",
    description:
      "Track vaccines and checkups so you never miss an important health milestone.",
    icon: InjectionIcon,
    iconColor: "#d68663",
  },
  {
    title: "AI Parenting Assistant",
    description:
      "Get instant parenting answers and smart suggestions for naps, feeding, and care.",
    icon: ArtificialIntelligence08Icon,
    iconColor: "#2e8bb3",
  },
]

export const featuresCarouselData = [
  {
    title: "Smart Dashboard Overview",
    description:
      "Get a complete view of your baby’s daily activities, health updates, and progress in one clean and simple dashboard.",
  },
  {
    title: "Baby Profile Management",
    description:
      "Easily add and manage your baby’s profile, update personal details, and keep everything organized in one secure place.",
  },
  {
    title: "Daily Activity Logs",
    description:
      "Track feeding, diaper changes, and sleep patterns effortlessly to understand your baby’s routine and habits.",
  },
  {
    title: "Vaccinations & Doctor Checkups",
    description:
      "Stay on top of health records, vaccination schedules, and doctor appointments so nothing important gets missed.",
  },
]
