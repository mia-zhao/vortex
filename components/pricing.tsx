"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLocale } from "@/context/locale-context";
import { Check } from "lucide-react";

export default function Pricing() {
  const { pricing } = useLocale();

  return (
    <section id="pricing" className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">{pricing.title}</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          {pricing.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                plan.mostPopular ? "border-primary" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4">
                  {plan.monthlyPrice}
                  <span className="text-xl font-normal text-muted-foreground">
                    /month
                  </span>
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.buttonVariant as "default" | "outline"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
