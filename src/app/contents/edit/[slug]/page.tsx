"use client";

import * as S from "./styled";

type ContentEditPageProps = {
  params: {
    slug: number;
  };
};

export default function ContentEditPage({ params }: ContentEditPageProps) {
  return (
    <S.Section>
      <div>Edit</div>
    </S.Section>
  );
}
