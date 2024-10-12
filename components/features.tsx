import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SECTION_IDS } from "@/lib/constants";
import { Code, Smartphone, Palette, Search, Rocket, Globe } from "lucide-react";

const features = [
  {
    icon: <Code className="h-12 w-12 mb-4 text-primary" />,
    title: "Open Source Flexibility",
    description:
      "Utilize a fully customizable platform at no cost, empowering your creativity and innovation.",
  },
  {
    icon: <Smartphone className="h-12 w-12 mb-4 text-primary" />,
    title: "Adaptive Design",
    description:
      "Designed to deliver an exceptional user experience across all devices, from mobile to desktop.",
  },
  {
    icon: <Palette className="h-12 w-12 mb-4 text-primary" />,
    title: "Seamless Customization",
    description:
      "Easily adjust styles, layouts, and themes without requiring any coding expertise.",
  },
  {
    icon: <Search className="h-12 w-12 mb-4 text-primary" />,
    title: "SEO Optimized",
    description:
      "Engineered with SEO best practices to boost visibility and attract more visitors to your site.",
  },
  {
    icon: <Rocket className="h-12 w-12 mb-4 text-primary" />,
    title: "Instant Deployment",
    description:
      "Publish your website effortlessly with one-click integration to leading hosting services.",
  },
  {
    icon: <Globe className="h-12 w-12 mb-4 text-primary" />,
    title: "Multilingual Support",
    description:
      "Engage a global audience with support for multiple languages, enhancing accessibility.",
  },
];

export default function Features() {
  return (
    <section
      id={SECTION_IDS.FEATURES}
      className="w-full py-16 flex justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-accent-foreground text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex items-center">
                {feature.icon}
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
