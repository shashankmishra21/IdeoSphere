import Hero from "@/components/hero/Hero";

export const metadata = {
  title: "IdeoSphere | Collaborative Whiteboard",
  description: "Unleash your creativity with Doodle Space, an intuitive online canvas for sketching, drawing, and visual brainstorming. Perfect for artists, thinkers, and teams.",
  keywords: ["IdeoSphere", "Online Drawing Tool", "Digital Sketchbook", "Collaborative Whiteboard", "Visual Brainstorming", "Art App"],
  authors: [{ name: "Nisha" }],
  openGraph: {
    title: "IdeoSphere | Collaborative Whiteboard",
    description: "Unleash your creativity with Doodle Space, an intuitive online canvas for sketching, drawing, and visual brainstorming. Perfect for artists, thinkers, and teams.",
    type: "website",
    locale: "en_IN", 
    url: "https://www.doodlespace.xyz", 
  },
};


export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}