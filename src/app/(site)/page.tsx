import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "فروشگاه من",
  description: "فروشگاه من",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
