import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <div className="container grid gap-3 mt-3">
      <button className="btn btn-primary g-col-12">Bootstrap button</button>
      <div className="g-col-12">
        <Accordion />
      </div>
    </div>
  );
}
