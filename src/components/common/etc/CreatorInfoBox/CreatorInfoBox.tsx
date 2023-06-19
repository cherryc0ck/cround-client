import Image from "next/image";

import { media } from "@/styles/themes/foundations";
import Heart from "./heart/Heart";
import Bookmark from "./bookmark/Bookmark";
import * as S from "./styled";

type CreatorInfoBoxProps = {
  data: {
    id: number;
    profileImage: string;
    author: string;
    liked: boolean;
    likesCount: number;
    bookmarked: boolean;
    bookmarksCount: number;
  };
  onBookmark: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelBookmark: (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
  onLike: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  onCancelLike: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function CreatorInfoBox({
  data,
  onBookmark,
  onCancelBookmark,
  onLike,
  onCancelLike,
}: CreatorInfoBoxProps) {
  const {
    id,
    profileImage,
    author,
    liked,
    likesCount,
    bookmarked,
    bookmarksCount,
  } = data;

  return (
    <S.Container>
      <S.ImageNameGroup>
        <S.Figure>
          <Image
            src={profileImage}
            alt="Creator Profile Image"
            sizes={media.images.sizes}
            fill
          />
        </S.Figure>
        <S.Name>{author}</S.Name>
      </S.ImageNameGroup>
      <S.LikeBookmarkGroup>
        <Heart
          isLiked={liked}
          id={id}
          count={likesCount}
          onClick={liked ? onCancelLike : onLike}
        />
        <Bookmark
          id={id}
          isBookmarked={bookmarked}
          count={bookmarksCount}
          onClick={bookmarked ? onCancelBookmark : onBookmark}
        />
      </S.LikeBookmarkGroup>
    </S.Container>
  );
}
