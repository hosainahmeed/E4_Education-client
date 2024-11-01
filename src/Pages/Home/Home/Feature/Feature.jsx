import SectionHeader from "../../../../Component/utils/SectionHeader";
import feature1 from "../../../../assets/Feature/1.webp";
import feature2 from "../../../../assets/Feature/2.webp";
import feature3 from "../../../../assets/Feature/3.webp";
import feature4 from "../../../../assets/Feature/4.webp";
import feature5 from "../../../../assets/Feature/5.webp";
import feature6 from "../../../../assets/Feature/6.webp";
import feature7 from "../../../../assets/Feature/7.webp";
import feature8 from "../../../../assets/Feature/8.webp";
import feature9 from "../../../../assets/Feature/9.webp";
import feature10 from "../../../../assets/Feature/10.webp";

const featurecard = [
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  feature7,
  feature8,
  feature9,
  feature10,
];

function Feature() {
  return (
    <div className="flex items-center justify-center flex-col">
      <SectionHeader
        subHead={"A Feature-Rich LMS"}
        head={
          "We've breen helping customers deliver eLearning in more than 10 countries"
        }
      ></SectionHeader>

      <div className="grid grid-cols-2 gap-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {featurecard.map((card, index) => (
          <div key={index} className="bg-white px-2 rounded-lg">
            <img src={card} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
