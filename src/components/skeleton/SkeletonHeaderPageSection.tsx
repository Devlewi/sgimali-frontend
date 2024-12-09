import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonHeaderPageSection: React.FC = () => {
  return (
    <section
      className="no-padding sh-company-history skeleton"
      style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
    >
      <div className="sub-header">
        {/* Skeleton pour le titre */}
        <Skeleton
          width="50%"
          height={32}
          style={{ marginBottom: "1rem", borderRadius: "8px", animationDuration: "1.2s" }}
        />

        {/* Skeleton pour la breadcrumb */}
        <Skeleton
          width="80%"
          height={24}
          style={{ borderRadius: "8px", animationDuration: "1.2s" }}
        />
      </div>
    </section>
  );
};

export default SkeletonHeaderPageSection;
