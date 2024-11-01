import SectionHeader from "../../../../Component/utils/SectionHeader";
import {
  FaBrain,
  FaHandsHelping,
  FaComments,
  FaGraduationCap,
} from "react-icons/fa";
function Perfection() {
  const features = [
    {
      icon: <FaBrain className="text-6xl text-orange-500" />,
      title: "Enhance Reading And Reasoning Skills.",
      description:
        "Nulla facilisi. Aliquam maximus, ipsum convallis pellentesque, ante sem pulvinar eros, a iaculis augue odio.",
      bgColor: "bg-orange-100",
    },
    {
      icon: <FaHandsHelping className="text-6xl text-yellow-500" />,
      title: "High Standards For Security And Safety.",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis eleifend.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FaComments className="text-6xl text-green-500" />,
      title: "Clear And Genuine Communication With Parents.",
      description:
        "Proin rutrum tristique arcu. Pellentesque turpis urna, sodales sit amet odio eu, ultricies tincidunt tellus.",
      bgColor: "bg-green-100",
    },
    {
      icon: <FaGraduationCap className="text-6xl text-pink-500" />,
      title: "Kids Are Free To Use Their Imaginations.",
      description:
        "Vivamus ut malesuada mi. Sed ultricies, dolor non iaculis lacinia, metus lorem posuere purus, sit amet efficitur.",
      bgColor: "bg-pink-100",
    },
  ];

  return (
    <div>
      <SectionHeader
        subHead={"Dedicated To Perfection"}
        head={"Building Good Foundation Of Knowledge"}
      ></SectionHeader>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-lg ${feature.bgColor} border-r-2 border-dotted border-black`}
            >
              <div className="p-4 rounded-full">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-bold text-center text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-center text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Perfection;
