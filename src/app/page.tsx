import path from "path";
import { promises as fs } from "fs";
import Hero from "@/components/Hero";
import HomeContent from "@/components/HomeContent";
import About from "@/components/About";
import VisitStore from "@/components/VisitStore";

export default async function Home() {
  // Read products data
  const dataFilePath = path.join(process.cwd(), "data", "products.json");
  const fileContents = await fs.readFile(dataFilePath, "utf8");
  const products = JSON.parse(fileContents);

  return (
    <main className="min-h-screen">
      <Hero />
      <HomeContent products={products} />
      <About />
      <VisitStore />
    </main>
  );
}
