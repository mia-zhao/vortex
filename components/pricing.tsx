import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SECTION_IDS } from "@/lib/constants";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$0.00",
    description: "Ideal for individuals and small businesses",
    features: [
      "Website Hosting",
      "Basic Support",
      "1GB Storage",
      "SSL Certificate",
    ],
    buttonText: "Get Started for Free",
    buttonVariant: "outline" as const,
  },
  {
    name: "Standard",
    price: "$49.00",
    description: "Perfect for growing businesses with more needs",
    features: [
      "All Basic Features",
      "Custom Domain",
      "5GB Storage",
      "Email Support",
      "Analytics Dashboard",
    ],
    buttonText: "Join Standard Plan",
    buttonVariant: "default" as const,
    mostPopular: true,
  },
  {
    name: "Premium",
    price: "$99.00",
    description: "Designed for large organizations needing advanced features",
    features: [
      "All Standard Features",
      "Unlimited Storage",
      "Priority Support",
      "Advanced Security Features",
      "Custom Integrations",
    ],
    buttonText: "Sign Up for Premium",
    buttonVariant: "outline" as const,
  },
];

export default function Pricing() {
  return (
    <section id={SECTION_IDS.PRICING} className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Affordable and Transparent Pricing Plans
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Start optimizing your website services today
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
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
                  {plan.price}
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
                <Button className="w-full" variant={plan.buttonVariant}>
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
