"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocale } from "@/context/locale-context";
import { Code, Smartphone, Palette, Search, Rocket, Globe } from "lucide-react";

const iconMap: { [key: string]: JSX.Element } = {
  "open-source": <Code className="h-12 w-12 mb-4 text-primary" />,
  adaptive: <Smartphone className="h-12 w-12 mb-4 text-primary" />,
  custom: <Palette className="h-12 w-12 mb-4 text-primary" />,
  seo: <Search className="h-12 w-12 mb-4 text-primary" />,
  quick: <Rocket className="h-12 w-12 mb-4 text-primary" />,
  global: <Globe className="h-12 w-12 mb-4 text-primary" />,
};

export default function Features() {
  const { features } = useLocale();

  return (
    <section id="features" className="w-full py-16 flex justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-accent-foreground text-center mb-12">
          {features.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.featureList.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex items-center">
                {iconMap[feature.id]}
                <CardTitle className="text-xl font-semibold">
                  {feature.name}
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
