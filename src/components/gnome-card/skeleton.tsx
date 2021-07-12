import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function GnomeCardSkeleton() {
  const SkeletonCard = () => (
    <div className="gnome-card">
      <div className="profile space-between">
        <Skeleton circle className="profile-image" />
      </div>
      <Skeleton height={220} />
    </div>
  );

  return (
    <SkeletonTheme color="#393b3c" highlightColor="#9ca3af">
      <div className="gnome-grid">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </SkeletonTheme>
  );
}
