"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Heart, Wheat, Users, Star, HelpCircle, MapPin } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Українська Пекарня"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Ukrainian Bakery"
          description="Traditional recipes passed down through generations. Fresh bread, pastries, and authentic Ukrainian delicacies baked daily with love and care."
          tag="Family Tradition"
          tagIcon={Heart}
          buttons={[
            {
              text: "View Menu",
              href: "product"
            },
            {
              text: "Order Now",
              href: "contact"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/5490924/pexels-photo-5490924.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Traditional Ukrainian bakery interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Heritage"
          description={[
            "For over 40 years, our family has been baking authentic Ukrainian bread and pastries using traditional recipes from our homeland.",
            "Every loaf is crafted with the finest ingredients, time-honored techniques, and the warmth of Ukrainian hospitality."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "team"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Fresh Daily Selections"
          description="Handcrafted breads and pastries made with traditional Ukrainian recipes"
          tag="Daily Fresh"
          tagIcon={Wheat}
          products={[
            {
              id: "1",
              brand: "Traditional",
              name: "Ukrainian Rye Bread",
              price: "$4.50",
              rating: 5,
              reviewCount: "150+",
              imageSrc: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ukrainian traditional rye bread"
            },
            {
              id: "2",
              brand: "Holiday Special",
              name: "Paska Easter Bread",
              price: "$8.00",
              rating: 5,
              reviewCount: "89",
              imageSrc: "https://images.pexels.com/photos/7746695/pexels-photo-7746695.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Ukrainian Easter bread paska"
            },
            {
              id: "3",
              brand: "Artisan",
              name: "Traditional White Bread",
              price: "$3.75",
              rating: 5,
              reviewCount: "200+",
              imageSrc: "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Traditional Ukrainian white bread"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Master Bakers"
          description="Meet the talented artisans behind every delicious creation"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Oksana Petrenko",
              role: "Head Baker & Owner",
              description: "Third generation baker from Lviv, specializing in traditional Ukrainian breads and holiday pastries with over 25 years of experience.",
              imageSrc: "https://images.pexels.com/photos/3983577/pexels-photo-3983577.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Oksana Petrenko"
            },
            {
              id: "2",
              name: "Viktor Kovalenko",
              role: "Master Baker",
              description: "Expert in artisan bread making and traditional Ukrainian sourdough techniques. Trained in Kyiv's finest bakeries.",
              imageSrc: "https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Viktor Kovalenko"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real feedback from our valued customers who love our authentic Ukrainian baking"
          tag="Customer Love"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Maria Shevchenko",
              role: "Local Resident",
              company: "Community Member",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7144185/pexels-photo-7144185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Maria Shevchenko"
            },
            {
              id: "2",
              name: "Dmitri Ivanov",
              role: "Regular Customer",
              company: "Bread Enthusiast",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4321590/pexels-photo-4321590.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Dmitri Ivanov"
            },
            {
              id: "3",
              name: "Anna Kozlova",
              role: "Family Customer",
              company: "Local Family",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3985069/pexels-photo-3985069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Anna Kozlova"
            },
            {
              id: "4",
              name: "Elena Bondarenko",
              role: "Business Owner",
              company: "Restaurant Partner",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8292809/pexels-photo-8292809.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Elena Bondarenko"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Common questions about our bakery, products, and services"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What time do you open?",
              content: "We open at 7:00 AM daily and bake fresh bread throughout the morning. Our busiest hours are 8-10 AM when everything is fresh from the oven."
            },
            {
              id: "2",
              title: "Do you take custom orders?",
              content: "Yes! We accept custom orders for special occasions including traditional Ukrainian wedding breads, holiday pastries, and celebration cakes. Please give us 2-3 days notice."
            },
            {
              id: "3",
              title: "Are your recipes authentic Ukrainian?",
              content: "Absolutely. All our recipes have been passed down through our family for generations. We use traditional Ukrainian techniques and source authentic ingredients whenever possible."
            },
            {
              id: "4",
              title: "Do you offer delivery?",
              content: "We offer local delivery within 10 miles for orders over $25. We also partner with local delivery services for your convenience."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Order Fresh Daily"
          description="Subscribe to our newsletter for daily fresh bread updates and special offers on traditional Ukrainian pastries."
          tagIcon={MapPin}
          inputPlaceholder="Your email address"
          buttonText="Subscribe"
          termsText="Get notifications about fresh baking times and special Ukrainian holiday treats."
          imageSrc="https://images.pexels.com/photos/12568127/pexels-photo-12568127.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Ukrainian bakery storefront"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Українська Пекарня"
          columns={[
            {
              items: [
                {
                  label: "Fresh Bread",
                  href: "product"
                },
                {
                  label: "Pastries",
                  href: "product"
                },
                {
                  label: "Custom Orders",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Bakers",
                  href: "team"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                }
              ]
            },
            {
              items: [
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Hours",
                  href: "faq"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}