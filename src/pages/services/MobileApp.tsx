import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { getService } from "@/data/services";

export default function MobileApp() {
  const service = getService("mobile-app");
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
