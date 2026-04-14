import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import heroImage from "@/assets/hero-image.png"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { featuresCarouselData, servicesCardData } from "@/constant"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const RootLayout = () => {
  if (true) {
    return (
      <div className="relative flex h-svh w-full flex-col overflow-y-auto bg-white">
        <div className="sticky top-0 z-50 flex min-h-14 justify-center border-b border-gray-200 bg-white">
          <div className="flex h-full w-full max-w-none cursor-pointer items-center justify-between px-4 md:max-w-300 md:px-0">
            <div className="flex flex-row items-center">
              <img src={logo} alt="GrowTrack" width={40} />
              <h1 className="ml-2 text-2xl font-bold tracking-tight text-gray-800">
                GROWTRACK.
              </h1>
            </div>

            <div className="flex flex-row items-center gap-3">
              <Button className="rounded-lg text-[#30A98E] ring-1 ring-[#30A98E]">
                Sign Up
              </Button>
              <Button className="rounded-lg bg-[#30A98E] text-white ring-1 ring-[#30A98E]">
                Sign In
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-none flex-1 self-center px-4 md:max-w-300 md:px-0">
          <div className="flex h-[calc(100svh-3.5rem)] items-center justify-center">
            <div className="flex flex-1 flex-col items-baseline justify-center">
              <h1 className="mb-6 text-5xl leading-16 font-bold text-gray-800">
                Track your baby's growth and milestones with{" "}
                <span className="text-[#30A98E]">GrowTrack.</span>
              </h1>
              <p className="text-lg text-gray-800">
                Capture every precious moment of your baby's journey—from first
                smiles to first steps. GrowTrack helps you easily monitor
                growth, celebrate milestones, and stay confiden every step of
                the way.
              </p>

              <Button className="group mt-4 w-auto cursor-pointer rounded-lg bg-[#30A98E] p-6 font-medium text-white transition duration-200 ease-in-out hover:bg-[#299981]">
                Get Started{" "}
                <HugeiconsIcon
                  icon={ArrowRight02Icon}
                  color="white"
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Button>
            </div>
            <div className="hidden h-full w-full flex-1 items-center justify-end md:flex">
              <img
                className="h-full w-lg object-contain"
                src={heroImage}
                alt="Hero Image"
              />
            </div>
          </div>

          {/* SERVICES */}
          <section className="mb-20 flex w-full flex-col">
            <div className="mb-16 flex flex-col items-center justify-center">
              <h2 className="font-base mb-2 text-center text-2xl text-gray-800">
                Everything You Need to Care for Your Baby
              </h2>
              <p className="text-center text-base font-light text-gray-600">
                Track daily routines and milestones with GrowTrack—stay
                organized and confident with smart AI-powered baby care.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              {servicesCardData.map((item) => {
                return (
                  <Card
                    className="bg-slate-100 ring-1 ring-slate-200 transition-transform duration-300 ease-in-out hover:-translate-y-4"
                    key={item.title}
                  >
                    <CardContent>
                      <div
                        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white`}
                      >
                        <HugeiconsIcon
                          icon={item.icon}
                          color={item.iconColor}
                        />
                      </div>
                      <CardTitle className="mb-2 font-semibold text-gray-800">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* FEATURES */}
          <section className="mb-20 flex w-full items-center justify-center overflow-hidden rounded-3xl bg-[#30A98E] px-4 py-10 md:min-h-[36rem] md:px-12 md:py-16">
            <Carousel
              opts={{ loop: true }}
              className="w-full max-w-4xl px-0 pb-16 sm:px-6 md:px-10 md:pb-0"
            >
              <CarouselContent className="ml-0 md:-ml-4">
                {featuresCarouselData.map((item) => (
                  <CarouselItem
                    key={item.title}
                    className="bg-red-100 pl-0 md:pl-4"
                  >
                    <div className="w-auto px-1 text-center text-white md:p-2">
                      {/* <h2 className="">{item.title}</h2> */}
                      <p className="text-sm leading-6 text-white/90 md:text-base md:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="top-auto bottom-1 left-[calc(50%-2.75rem)] translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white/20 md:top-1/2 md:bottom-auto md:left-4 md:-translate-y-1/2 md:scale-125" />
              <CarouselNext className="top-auto right-auto bottom-1 left-[calc(50%+0.25rem)] translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white/20 md:top-1/2 md:right-4 md:left-auto md:-translate-y-1/2 md:scale-125" />
            </Carousel>
          </section>
        </div>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex h-svh w-full flex-col overflow-y-auto bg-gray-100">
          <div className="sticky top-0 z-50 flex min-h-12 w-full flex-row items-center border-b border-gray-200 bg-white px-2 md:min-h-14">
            <SidebarTrigger className="cursor-pointer" />
          </div>
          <div className="flex w-full flex-1 flex-row justify-center">
            <div className="h-full w-full max-w-300 p-4">
              <Outlet />
            </div>
          </div>
        </div>
        <TanStackRouterDevtools />
      </SidebarInset>
    </SidebarProvider>
  )
}

export const Route = createRootRoute({ component: RootLayout })
