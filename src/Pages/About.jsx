import { Zap, Package, Users, Star, Truck, Shield, Heart, Gem, ArrowRight } from "lucide-react";
import Footer from "../Components/Footer";
import { NavLink } from "react-router";

const stats = [
  { icon: Package, value: "20K+", label: "Products" },
  { icon: Users, value: "50K+", label: "Happy Customers" },
  { icon: Star, value: "4.9", label: "Avg. Rating" },
  { icon: Truck, value: "99%", label: "On-time Delivery" },
];

const values = [
  {
    icon: Shield,
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Truck,
    title: "Speed",
    desc: "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: Heart,
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Gem,
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
  },
];

const team = [
  { initial: "A", name: "Aryan Shah", role: "Founder & CEO", color: "bg-[#d4ff2f] text-black" },
  { initial: "P", name: "Priya Mehta", role: "Head of Product", color: "bg-blue-500 text-white" },
  { initial: "R", name: "Rohan Verma", role: "Lead Engineer", color: "bg-purple-500 text-white" },
  { initial: "S", name: "Sneha Kapoor", role: "Design Director", color: "bg-rose-500 text-white" },
];

export default function About() {
  return (
    <div className="min-h-screen w-full bg-black px-6 py-16">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="w-14 h-14 rounded-2xl bg-[#d4ff2f] flex items-center justify-center mx-auto mb-6">
          <Zap className="w-7 h-7 text-black" fill="black" />
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-4">
          About <span className="text-[#d4ff2f]">SkyMart</span>
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="border border-white/10 rounded-2xl p-6 text-center"
            >
              <Icon className="w-4 h-4 text-[#d4ff2f] mx-auto mb-2" />
              <div className="text-white text-xl font-bold">{stat.value}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Our Story */}
      <div className="max-w-4xl mx-auto border border-white/10 rounded-2xl p-8 mb-16">
        <h2 className="text-white font-bold text-lg mb-4">Our Story</h2>
        <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
          <p>
            SkyMart started in 2022 as a small side project — two engineers
            tired of bloated, slow e-commerce experiences. We asked ourselves
            what if shopping online was actually{" "}
            <span className="text-gray-200 font-medium">enjoyable</span>?
          </p>
          <p>
            Three years later, SkyMart serves over 50,000 customers across the
            country. We stock electronics, fashion, jewelry, and everyday
            essentials — all at prices that don't require a second mortgage.
          </p>
          <p>
            We're still the same team at heart: obsessed with speed,
            transparency, and making you feel good about every purchase you
            make here.
          </p>
        </div>
      </div>

      {/* What we stand for */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-white font-bold text-2xl text-center mb-8">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="border border-white/10 rounded-2xl p-5 flex gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-[#3a3d10] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#d4ff2f]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">
                    {val.title}
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    {val.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Meet the team */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-white font-bold text-2xl text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="border border-white/10 rounded-2xl p-6 text-center"
            >
              <div
                className={`w-12 h-12 rounded-full ${member.color} flex items-center justify-center font-bold mx-auto mb-3`}
              >
                {member.initial}
              </div>
              <div className="text-white text-sm font-semibold">
                {member.name}
              </div>
              <div className="text-gray-500 text-xs mt-0.5">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto border border-[#d4ff2f]/30 rounded-2xl p-10 text-center">
        <h2 className="text-white font-bold text-2xl mb-2">Ready to shop?</h2>
        <p className="text-gray-400 text-sm mb-6">
          Explore thousands of products at unbeatable prices.
        </p>
        <NavLink to={"/products"} className="bg-[#d4ff2f] text-black font-semibold rounded-lg px-6 py-3 inline-flex items-center gap-2">
          Browse Products
          <ArrowRight className="w-4 h-4" />
        </NavLink>
      </div>
    </div>
  );
}