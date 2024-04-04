import Cert from "@/components/Cert";
import Company from "@/components/Company";
import Header from "@/components/Header";
import Resources from "@/components/Resources";
import Subjects from "@/components/Subjects";
import Testimonies from "@/components/Testimonies";
export default function Home() {
  return (
    <main>
      <Header/>
      <Subjects/>
      <Company/>
      <Cert/>
      <Resources/>
      <Testimonies/>

    </main>
  );
}
