import S from './skeleton.module.scss';

export default function CardSkeleton() {
    return (
        <div className={S.skeletonCard}>
            <div className={S.skeletonImage} />
            <div className={S.skeletonTitle} />
            <div className={S.skeletonYear} />
        </div>
    );
}