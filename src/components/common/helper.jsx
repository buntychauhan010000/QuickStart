import {
  BsBarChart,
  BsBinoculars,
  BsBoundingBoxCircles,
  BsBoxSeam,
  BsBriefcase,
  BsBrightnessHigh,
  BsCalendar4Week,
  BsCardChecklist,
  BsChatSquareText,
  BsEasel,
  BsPatchCheck,
} from "react-icons/bs";
import { IoEaselOutline } from "react-icons/io5";
import { LuActivity } from "react-icons/lu";
import { PiBroadcastFill } from "react-icons/pi";
import JenaKarlis from "../../assets/img/JenaKarlis.jpg";
import MattBrandon from "../../assets/img/MattBrandon.jpg";
import JohnLarson from "../../assets/img/JohnLarson.jpg";
import SaulGoodman from "../../assets/img/SaulGoodman.jpg";
import SaraWilsson from "../../assets/img/SaraWilsson.jpg";


// This is the pricing plans array used in the Pricing component.
export const pricingplans = [
  {
    title: "Free Plan",
    price: 0,
    description:
      "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
    features: [
      { text: "Quam adipiscing vitae proin", available: true },
      { text: "Nec feugiat nisl pretium", available: true },
      { text: "Nulla at volutpat diam uteera", available: true },
      { text: "Pharetra massa massa ultricies", available: false },
      { text: "Massa ultricies mi quis hendrerit", available: false },
      {
        text: "Voluptate id voluptas qui sed aperiam rerum",
        available: false,
      },
      {
        text: "Iure nihil dolores recusandae odit voluptatibus",
        available: false,
      },
    ],
  },
  {
    title: "Business Plan",
    price: 29,
    description:
      "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
    isPopular: true,
    features: [
      { text: "Quam adipiscing vitae proin", available: true },
      { text: "Nec feugiat nisl pretium", available: true },
      { text: "Nulla at volutpat diam uteera", available: true },
      { text: "Pharetra massa massa ultricies", available: true },
      { text: "Massa ultricies mi quis hendrerit", available: true },
      {
        text: "Voluptate id voluptas qui sed aperiam rerum",
        available: true,
      },
      {
        text: "Iure nihil dolores recusandae odit voluptatibus",
        available: false,
      },
    ],
  },
  {
    title: "Developer Plan",
    price: 49,
    description:
      "Ullam mollitia quasi nobis soluta in voluptatum et sint palora dex strater",
    features: [
      { text: "Quam adipiscing vitae proin", available: true },
      { text: "Nec feugiat nisl pretium", available: true },
      { text: "Nulla at volutpat diam uteera", available: true },
      { text: "Pharetra massa massa ultricies", available: true },
      { text: "Massa ultricies mi quis hendrerit", available: true },
      {
        text: "Voluptate id voluptas qui sed aperiam rerum",
        available: true,
      },
      {
        text: "Iure nihil dolores recusandae odit voluptatibus",
        available: true,
      },
    ],
  },
];
// // This is the data array used in the EnimQuis component.
export const enimquisdata = [
  {
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias ",
    icon: <BsEasel />,
  },
  {
    title: "Nemo Enim",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiise",
    icon: <BsPatchCheck />,
  },
  {
    title: "Dine Pad",
    description:
      "Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit",
    icon: <BsBrightnessHigh />,
  },
  {
    title: "Tride clov",
    description:
      "Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit",
    icon: <BsBrightnessHigh />,
  },
];
// // This is the card items array used in the Card component.
export const carditem = [
  {
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    image: <BsBriefcase />,
  },
  {
    title: "Dolor Sitema",
    description:
      "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exa",
    image: <BsCardChecklist />,
  },
  {
    title: "Sed ut perspiciatis",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    image: <BsBarChart />,
  },
];
// // This is the features data array used in the Features component.
export const featuresdata = [
  {
    title: "Modi sit est dela pireda nest",
    lorem:
      "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    src: <BsBinoculars />,
  },
  {
    title: "Unde praesenti mara setra le",
    lorem:
      "Recusandae atque nihil. Delectus vitae non similique magnam molestiae sapiente similique tenetur aut voluptates sed voluptas ipsum voluptas",
    src: <BsBoxSeam />,
  },
  {
    title: "Pariatur explica nitro dela",
    lorem:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Debitis nulla est maxime voluptas dolor aut",
    src: <BsBrightnessHigh />,
  },
];
// This is the navigation links array used in the NavBar component.
export const navlinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Dropdown", href: "#home" },
  { name: "Contact", href: "#contact" },
];
// // This is the services data array used in the Services component.
export const servicesdata = [
  {
    title: "Nesciunt Mete",
    lorem:
      "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
    icon: <LuActivity />,
    color: "#0dcaf0",
  },
  {
    title: "Eosle Commodi",
    lorem:
      "Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.",
    icon: <PiBroadcastFill />,
    color: "#fd7e14",
  },
  {
    title: "Ledo Markt",
    lorem:
      "Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.",
    icon: <IoEaselOutline />,
    color: "#20c997",
  },
  {
    title: "Asperiores Commodi",
    lorem:
      "Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.",
    icon: <BsBoundingBoxCircles />,
    color: "#dc3545",
  },
  {
    title: "Velit Doloremque.",
    lorem:
      "Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.",
    icon: <BsCalendar4Week />,
    color: "#6f42c1",
  },
  {
    title: "Dolori Architecto",
    lorem:
      "Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.",
    icon: <BsChatSquareText />,
    color: "#d63384",
  },
];
// This is the FAQs array used in the Frequently component.
export const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer:
      "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis",
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer:
      "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
    answer:
      "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in",
  },
  {
    question: "Perspiciatis quod quo quos nulla quo illum ullam?",
    answer:
      "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et.",
  },
];
// // This is the slider data array used in the Slider component.
export const sliderdata = [
  {
    description:
      " Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. ",
    src: JenaKarlis,
    name: "Jena Karlis",
    position: "Store Owner",
  },
  {
    description:
      "  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",

    src: MattBrandon,
    name: "Matt Brandon",
    position: "Freelancer",
  },
  {
    description:
      "  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",

    src: JohnLarson,
    name: "John Larson",
    position: "Entrepreneur",
  },
  {
    description:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. ",

    src: SaulGoodman,
    name: "Saul Goodman",
    position: "Ceo & Founder",
  },
  {
    description:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.  ",

    src: SaraWilsson,
    name: "Sara Wilsson",
    position: "Designer",
  },
];
export const googleMap = (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48399.333548272545!2d-74.034119!3d40.696915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown.%20Conference%20Center!5e0!3m2!1sen!2sus!4v1752145529770!5m2!1sen!2sus"
    width="100%"
    height="450"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);