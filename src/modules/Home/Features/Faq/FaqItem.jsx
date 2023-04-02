import Image from "next/image";
import faqClsoe from "../../../../assets/faqClose.svg";
import faqOpen from "../../../../assets/faqOpen.svg";

function FaqItem({ title, content, index, openIndex, setOpenIndex }) {
  const isOpen = index === openIndex;

  function toggleAccordion() {
    setOpenIndex(isOpen ? -1 : index);
  }

  return (
    <div
      className={`lg:w-[700px] w-full border-b border-[#E0EDFD] py-7 ${
        isOpen === true ? "!border-[#1777CB]" : "border-[#E0EDFD]"
      }`}
    >
      <div
        className="flex justify-between p-4 cursor-pointer transition-all duration-700 ease-in-out"
        onClick={toggleAccordion}
      >
        <h2 className="text-[#1A191B] font-semibold text-lg p-0">{title}</h2>
        <span>
          {isOpen ? (
            <Image src={faqClsoe} alt="faqClsoe" />
          ) : (
            <Image src={faqOpen} alt="faqClsoe" />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="p-4 font-secondary text-[#555867] lg:w-[633px] transition-all duration-700 ease-in-out">
          {content}
        </div>
      )}
    </div>
  );
}

export default FaqItem;
