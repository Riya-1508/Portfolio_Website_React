import pro1 from "../assets/project1.avif"
import pro2 from "../assets/heroimg2.avif"
import pro3 from "../assets/project3.jpg"
import video1 from "../assets/studyabroad.mp4"
import video2 from "../assets/railwayConcession.mp4";
import video3 from "../assets/chatroom.mp4";
const ProjectCardData = [
  {
    imgsrc: pro1,
    title: "Study Abroad Website",
    text: "This website gives information on the top educational institutes of the top countries. This will greatly help the students who want to study abroad.It provides information on scholarships and accommodation nearby the college you have opted for.",
    view: video1,
  },
  {
    imgsrc: pro2,
    title: "Railway Pass Concession Portal",
    text: "This portal makes it easy for users to apply for a concession pass, verify their concession, and renew their concession slip very quickly before it expires, thus making it time-saving.Through this portal, they can update their details which would be reflected in their concession slip.",
    view: video2,
  },
  {
    imgsrc: pro3,
    title: "Realtime Chat Application",
    text: "A real-time chat app where users of different technical fields can connect.This chat-app has different rooms named after programming languages and users can enter into more than one room and connect with other users.",
    view: video3,
  },
];

export default ProjectCardData