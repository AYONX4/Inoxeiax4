import { HeroVideoDialog } from "@/component/video/hero-video-dialog"

function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="/mainvdo.webm"
        thumbnailSrc="/inoxeia.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/mainvdo.webm"
        thumbnailSrc="/inoxeia.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}

function HeroVideoDialogDemoTopInBottomOut() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc="/mainvdo.webm"
        thumbnailSrc="/inoxeia.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="/mainvdo.webm"
        thumbnailSrc="/inoxeia.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  )
}

export  {
  HeroVideoDialogDemo,
  HeroVideoDialogDemoTopInBottomOut,
}
