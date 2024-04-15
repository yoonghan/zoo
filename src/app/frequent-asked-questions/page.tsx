import { Accordion } from "@/components/Accordion";

export default function Faq() {
  return (
    <>
      <main>
        <article>
          <h1 className="text-4xl font-bold text-center">
            Frequent Asked Questions
          </h1>
          <div className="mt-8">
            <Accordion
              model={[
                {
                  label: "How to reach Zoo Negara?",
                  content:
                    "We have provided the info in [/visitor-info/getting-there|Getting There] section.",
                },
                {
                  label: "What are the admission rates?",
                  content:
                    "You can check it out in our [https://ticket.zoonegara.my/|*Ticketing Website].",
                },
                {
                  label:
                    "I'm a teacher and planning to bring my students to zoo. Do you offer any school concession rates?",
                  content: "Yes, please [/contact-us|*Contact Us].",
                },
                {
                  label: "Can you organize a birthday party?",
                  content: "Yes, check it out in our [/events|Event] section.",
                },
                {
                  label: "What are the opening hours?",
                  content:
                    "Yes, check it out in our [/visitor-info|Visitor Info] section.",
                },
                {
                  label: "Is there any restaurant or food kiosk?",
                  content:
                    "Yes, check it out in our [/visitor-info/kiosks-n-facilities|Kiosk] section.",
                },
                {
                  label: "Is there an easy way to find restrooms inside?",
                  content:
                    "Yes, our restrooms are indicated in the [/visitor-info/zoo-map|Zoo Map].",
                },
                {
                  label: "Are pets allowed into the zoo?",
                  content: "Unfortunately,Pets are not permitted in the zoo.",
                },
                {
                  label: "Can I bring a bicycle or roller-blade?",
                  content:
                    "Skateboard, skates, bicycles, alcoholics, balloons, and fire-crackers of any kind are not allowed on site.",
                },
                {
                  label: "What are the times for the shows?",
                  content:
                    "Check it out in our [/visitor-info/zoo-map|Zoo Map's Show time] section. Don't miss it out!",
                },
                {
                  label:
                    "I love to take photos with animals. Do you have a schedule for this activity?",
                  content:
                    "Check it out in [/visitor-info/zoo-map|Zoo Map's Feeding Time] section. Have a great picture time!",
                },
                {
                  label:
                    "How do I get my free guide map in the zoo area just incase if I lost my way?",
                  content:
                    "[/visitor-info/zoo-map|Download] it from the website.",
                },
                {
                  label:
                    "Do you have any programs or educational package for school children?",
                  content:
                    "Check it out at [/get-involved|Get Involved] section.",
                },
                {
                  label: "How long does it take to walk around the zoo?",
                  content:
                    "Approximately 2 hours walk and 20 minutes by train rides.",
                },
                {
                  label:
                    "Do you have any suggestion to direct me around zoo area during my visit day?",
                  content: `Follow these 7 directions below to ensure your visit is memorable one. *(2 *hours *tour).
                  !! * Board train at the entrance.
                  !! * Stop at the Bird House, view birds.
                  !! * Board train to Tiger Exhibit.
                  !! * Stop at Savannah Walk. Visit Ape Centre & Mammal Kingdom.
                  !! * Board train to Reptile House, view reptiles.
                  !! * Walk to Bear Complex, Restaurant & visit Children’s World.
                  !! * Watch Multi-animal Show & walk back to entrance.
                  `,
                },
                {
                  label: "Why should I adopt zoo animals?",
                  content:
                    "Your support helps provide food, habitat, and environmental enhancements for the animals in our care.",
                },
                {
                  label: "What animals can I adopt?",
                  content:
                    "Any animal at the Zoo as listed [https://www.ticket2u.com.my/event/18171/zoo-negara-adoption-package|onTicket2u website].",
                },
                {
                  label: "Do I actually get to take the animal home with me?",
                  content:
                    "No. The Zoo Negara's adoption program is a symbolic adoption and the animal will remain at the Zoo.",
                },
                {
                  label: "Will anyone else adopt this animal?",
                  content:
                    "Yes. It takes more than one adoption to feed and care for an animal all year. All adoptions support the care and feeding of the animals at Zoo Negara.",
                },
                {
                  label: "Can I name my adopted animal?",
                  content:
                    "Unfortunately *no. All our Zoo Negara animals already have names.",
                },
                {
                  label: "Do I own the adopted animal?",
                  content:
                    "All the adopted animals remain in the care and custody of the Zoo Negara, and no ownership rights are conferred. Simply put, all the parental pride - none of the work!",
                },
                {
                  label: "Can I visit the adoptable animals?",
                  content:
                    "Yes, you may visit the adopted animals from the outer edge of their designated enclosure. Our habitats are designed to be as naturalistic as possible, because that’s best for the animals. Sometimes that means they will find a secluded place to rest, so they may not be easily visible. Different animals also are more active at various times of the day.",
                },
                {
                  label: "How is my adoption recognized?",
                  content:
                    "In keeping with our commitment to conservation, a digital adoption certificate is available with notepads, if applicable, and includes recognition online at our website and in the Zoo Negara annual report.",
                },
                {
                  label: "Can I adopt a specific animal by name at the Zoo?",
                  content:
                    "Due to the constantly changing nature of our animals, our adoption certificates will feature the general species rather than a specific animal gender or name.",
                },
                {
                  label: "I'm ready to adopt! How do I place an order?",
                  content:
                    "The easiest and quickest way is to click on [https://www.ticket2u.com.my/event/18171/zoo-negara-adoption-package|onTicket2u website]. When you reach the adoption pages, click on ‘Adopt Me’ next to the animal you want to adopt and you will then be asked to login, or register if you don’t have an account yet.",
                },
              ]}
              groupName="faq"
            />
          </div>
        </article>
      </main>
    </>
  );
}
