import { FeatureSteps } from "@/component/section/mockup"
const features = [
  { 
    step: 'Step 1', 
    title: 'How it looks',
    content: 'Transparent screen with hiding skills', 
    image: '/inoxeia.png' 
  },
  { 
    step: 'Step 2',
    title: 'How it works',
    content: 'Wait source code coming :)',
    image: '/inoxeia2.png'
  },
  { 
    step: 'Step 3',
    title: 'How to use',
    content: 'Screenshot it and get the answer simple asf',
    image: '/inoxeia3.png'
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps 
        features={features}
        title="keep hiding keep building"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
        className="mb-32 mt-32"
      />
  )
}