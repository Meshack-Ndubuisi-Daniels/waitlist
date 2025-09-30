import WaitlistForm from "../components/WaitlistForm";

export default function WaitlistPage() {
  return (
    <div className="bg-cream min-h-screen flex flex-col items-center justify-center pt-40">
      <h1 className= "text-brown font-montserrat text-2xl mb-1">JOIN THE WAITLIST 🚀</h1>
      <WaitlistForm />

      <div className="bg-cream p-4 text-brown font-montserrat text-1xl mb-1">
      *Each piece delivered to your doorstep comes with an ancient jewellery you could match it with, the kind your grandma wouldn't resist. 
      </div>
      <div className="bg-cream min-h-screen text-brown font-montserrat text-1xl mb-1">
      *Every piece we are making is inspired by an actual event in the past or a place of historic value. 
      </div>
    </div>    
  );
}
