import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion"
  
export default function FAQ() {
return (
    <div className="p-10 bg-[#0A0E16] text-white">
    <h1 className="text-center text-3xl font-bold text-[#00E0FF] mb-8">
        Faqs
    </h1>

    <Accordion
        type="single" 
        collapsible 
        className="max-w-3xl mx-auto space-y-4"
    >
        <AccordionItem
        value="item-1"
        className="border border-[#1E2A3E] rounded-lg overflow-hidden"
        >
        <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-[#141E2F] hover:bg-[#1a2537]">
            <div className="flex items-center space-x-3">
            <div className="h-8 w-8 flex items-center justify-center bg-[#1E2A3E] rounded-full">
                <img
                  src="src/assets/question mark.svg"
                  alt="Question Mark"
                  className="h-4 w-4"
                />
              </div>
            <span className="font-semibold">What is Ideathon?</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            An Ideathon is a competitive pitching event where teams present innovative ideas or solutions to real-world problems before a panel of experts. 
            Participants are evaluated based on criteria such as creativity, feasibility, social impact, and other key factors.
            </p>
        </AccordionContent>
        </AccordionItem>

        <AccordionItem
        value="item-2"
        className="border border-[#1E2A3E] rounded-lg overflow-hidden"
        >
        <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-[#141E2F] hover:bg-[#1a2537]">
            <div className="flex items-center space-x-3">
            <div className="h-8 w-8 flex items-center justify-center bg-[#1E2A3E] rounded-full">
                <img
                  src="src/assets/question mark.svg"
                  alt="Question Mark"
                  className="h-4 w-4"
                />
            </div>
            <span className="font-semibold">Is accommodation provided for participants?</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            Yes, accommodation is available for participants attending the final round.
            </p>
        </AccordionContent>
        </AccordionItem>

        <AccordionItem
        value="item-3"
        className="border border-[#1E2A3E] rounded-lg overflow-hidden"
        >
        <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-[#141E2F] hover:bg-[#1a2537]">
            <div className="flex items-center space-x-3">
            <div className="h-8 w-8 flex items-center justify-center bg-[#1E2A3E] rounded-full">
                <img
                  src="src/assets/question mark.svg"
                  alt="Question Mark"
                  className="h-4 w-4"
                />
              </div>
            <span className="font-semibold">Can we change the track during the event?</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            No, once a team selects a track, it cannot be changed during the event.
            </p>
        </AccordionContent>
        </AccordionItem>



        <AccordionItem
        value="item-4"
        className="border border-[#1E2A3E] rounded-lg overflow-hidden"
        >
        <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-[#141E2F] hover:bg-[#1a2537]">
            <div className="flex items-center space-x-3">
            <div className="h-8 w-8 flex items-center justify-center bg-[#1E2A3E] rounded-full">
                <img
                  src="src/assets/question mark.svg"
                  alt="Question Mark"
                  className="h-4 w-4"
                />
              </div>
            <span className="font-semibold">
              What if prototype gets damaged while coming on the way?
            </span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            If your prototype sustains any damage while in transit, please reach out to us immediately. We will assess the situation and provide an appropriate solution to address the issue.
            </p>
        </AccordionContent>
        </AccordionItem>


        <AccordionItem
        value="item-5"
        className="border border-[#1E2A3E] rounded-lg overflow-hidden"
        >
        <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-[#141E2F] hover:bg-[#1a2537]">
            <div className="flex items-center space-x-3">
            <div className="h-8 w-8 flex items-center justify-center bg-[#1E2A3E] rounded-full">
                <img
                  src="src/assets/question mark.svg"
                  alt="Question Mark"
                  className="h-4 w-4"
                />
              </div>
            <span className="font-semibold">
            What should I do if I encounter logistical issues with the prototype?
            </span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            If you face any logistical challenges related to the prototype, please reach out to us via email or text for assistance.
            </p>
        </AccordionContent>
        </AccordionItem>



        <AccordionItem
        value="item-6"
        className="border border-[#1E2A3E] rounded-lg overflow-hidden"
        >
        <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-[#141E2F] hover:bg-[#1a2537]">
            <div className="flex items-center space-x-3">
            <div className="h-8 w-8 flex items-center justify-center bg-[#1E2A3E] rounded-full">
                <img
                  src="src/assets/question mark.svg"
                  alt="Question Mark"
                  className="h-4 w-4"
                />
              </div>
            <span className="font-semibold">
              Is there a registration fee?
            </span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            Yes, teams advancing to the final round are required to pay a one-time registration fee of ₹150.
            </p>
        </AccordionContent>
        </AccordionItem>
    </Accordion>
    </div>
)
}
  