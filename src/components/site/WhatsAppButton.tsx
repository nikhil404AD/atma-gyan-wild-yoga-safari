import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Atma Gyan, I'd like to ask about your retreats.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Atma Gyan on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-forest text-on-dark shadow-soft ring-2 ring-gold transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
