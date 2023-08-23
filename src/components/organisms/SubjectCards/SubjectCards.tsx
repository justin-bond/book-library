import Link from "next/link";
import clsx from "clsx";

import Cards from "@/components/molecules/Cards";
import { renderSubjectImage } from "@/helpers/renderSubjectImage";

import { SubjectDetails } from "@/pages/subject/[slug]";
import { slugify } from "@/utils/stringFormatting";

import "./SubjectCards.scss";

interface SubjectCardsProps {
  title?: string;
  subjects: SubjectDetails[];
}

const SubjectCards = ({ title, subjects }: SubjectCardsProps) => {
  const renderSubjects = (subject: SubjectDetails) => {
    const image = renderSubjectImage(subject.name.toLowerCase());
    return (
      <div className={clsx("subject-card", { "has-image": image })}>
        <Link href={`/subject/${slugify(subject.name)}`}>
          {renderSubjectImage(subject.name.toLowerCase())}
          <div className="subject-card__content">
            <h3>{subject.name}</h3>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="subject-cards">
      {title && (
        <div className="subject-cards__title">
          <h3>{title}</h3>
        </div>
      )}
      <Cards items={subjects} itemView={renderSubjects} />
    </div>
  );
};

export default SubjectCards;
