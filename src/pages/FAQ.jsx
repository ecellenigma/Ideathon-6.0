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
            <span className="font-semibold">What is crypto capital?</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into
            electronic typesetting.
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
            <span className="font-semibold">Where are the verified contacts?</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
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
            <span className="font-semibold">How is daily revenue distributed?</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                Why does the website occasionally not display certain data?
            </span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#192238]">
            <p className="text-sm text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </AccordionContent>
        </AccordionItem>
    </Accordion>
    </div>
)
}
  