import Link from "next/link";

import Cards from "@/components/molecules/Cards";
import { renderSubjectImage } from "@/helpers/renderSubjectImage";

import { SubjectInfo } from "@/pages/subject/[slug]";
import { slugify } from "@/utils/stringFormatting";

import "./SubjectCards.scss";
import clsx from "clsx";

interface SubjectCardsProps {
  title?: string;
  subjects: SubjectInfo[];
}

const SubjectCards = ({ title, subjects }: SubjectCardsProps) => {
  const renderSubjects = (subject: SubjectInfo) => {
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
