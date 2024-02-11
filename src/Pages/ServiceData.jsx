import rct_img from './images/Root_Canal_Treatment.jpg';
import teeth_img from './images/Teeth_Cleaning.jpg';
import cosmo_img from './images/Cosmetic_Dentistry.jpg';
import implant_img from './images/Dental_Implant.png';
import braces_img from './images/Braces_and_Invisalign.jpg';
import pediatric_img from './images/Pediatric_Dentistry.jpg';

const ServiceData = [
  {
    id: 1,
    img_src: rct_img,
    title: "Root Canal Treatment (RCT)",
    description: "Let's save the tooth",
  },
  {
    id: 2,
    img_src: teeth_img,
    title: "Teeth Cleaning",
    description: "Are you eyeing whiter teeth?",
  },
  {
    id: 3,
    img_src: implant_img,
    title: "Dental Implants",
    description: "Make your implants last a lifetime.",
  },
  // {
  //   id: 4,
  //   img_src: "https://d3t5ai5vcxyqte.cloudfront.net/media/ztyabpe.svg",
  //   title: "Dentures",
  //   description: "Know the right type of denture for you.",
  // },
  // {
  //   id: 5,
  //   img_src:
  //     "https://d3t5ai5vcxyqte.cloudfront.net/media/pegjpxeakmijzlnklbubfsfun.svg",
  //   title: "Dental Fillings",
  //   description: "Repairing the decay with fillings that blend in.",
  // },
  {
    id: 6,
    img_src: braces_img,
    title: "Orthodontic Treatment/Braces",
    description: "Never be too shy to smile",
  },
  {
    id: 7,
    img_src: cosmo_img,
    title: "Cosmetic Dentistry",
    description: "Time to flaunt that smile",
  },
  {
    id: 8,
    img_src: pediatric_img,
    title: "Pediatric Dentistry",
    description: "For your child’s dental health",
  },
];

export default ServiceData;
