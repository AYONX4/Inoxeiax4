import { Cta4 } from "@/component/cta/moackup";

const CTA = () => {
  return (
    <Cta4
      title="We are here to help you"
      description="If you  are stuck at anything just fking screenshot it and get the correct answer usnig GEMINI, OPENAI."
      buttonText="Download"
      buttonUrl="/download"
      items={[
        "Technical Interviews",
        "Leetcode cooked",
        "Crack interviews",
        "We dont care are about anything",
      ]}
    />
  );
};

export { CTA };
