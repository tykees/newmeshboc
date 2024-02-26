import Exams from "@/components/Exams";
import Header from "@/components/Header";
import Subjects from "@/components/Subjects";
import Testimonies from "@/components/Testimonies";
export default function Home() {
  return (
    <main>
      <Header/>
      <Subjects/>
      <Exams/>
      <Testimonies/>
    </main>
  );
}
