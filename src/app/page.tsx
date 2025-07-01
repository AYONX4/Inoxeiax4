import { CTA } from "@/component/cta";
import { HeroSectionDemo } from "@/component/hero";
import LiquidGlassDemo from "@/component/liquid-glass";
import { FeatureStepsDemo } from "@/component/section";
import { HeroVideoDialogDemo } from "@/component/video";


const SquaresDemo = () => {
  return (
    <div className="overflow-hidden">
      <HeroSectionDemo />
      <FeatureStepsDemo />
      <HeroVideoDialogDemo />
      <CTA />
    </div>
  );
};
export default SquaresDemo