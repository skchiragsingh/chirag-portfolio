import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen text-white">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Projects />
      
      {/* Footer */}
      <footer className="bg-black py-12 border-t border-neutral-900 text-center relative z-20">
        <p className="text-neutral-500 font-light tracking-widest uppercase text-sm">
          © {new Date().getFullYear()} Chirag Singh. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
