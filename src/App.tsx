import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import CustomSoftware from "@/pages/services/CustomSoftware";
import MobileApp from "@/pages/services/MobileApp";
import WebApp from "@/pages/services/WebApp";
import Saas from "@/pages/services/Saas";
import UiUx from "@/pages/services/UiUx";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import Process from "@/pages/Process";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Testimonials from "@/pages/Testimonials";
import Partners from "@/pages/Partners";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import FAQ from "@/pages/FAQ";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";
import FromPrototypeToProduction from "@/pages/FromPrototypeToProduction";

const queryClient = new QueryClient();

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <BrowserRouter>
              <Routes>
                {/* Standalone landing page — its own nav, reuses Footer */}
                <Route path="/from-prototype-to-production" element={<FromPrototypeToProduction />} />

                <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/custom-software" element={<CustomSoftware />} />
                  <Route path="/services/mobile-app" element={<MobileApp />} />
                  <Route path="/services/web-app" element={<WebApp />} />
                  <Route path="/services/saas" element={<Saas />} />
                  <Route path="/services/ui-ux" element={<UiUx />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
                  <Route path="/process" element={<Process />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
