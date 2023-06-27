"use client";

import { PageFilter, SearchInput } from "@/components/common";
import ContentList from "@/components/common/list/content/ContentList";
import useContentList from "@/components/domain/contents/hooks/useContentList";
import NotList from "@/components/common/etc/notList/NotList";
import * as S from "./styled";

export default function ContentsPage() {
  const { searched, getListProps, getSearchProps, getFilterProps } =
    useContentList();

  return (
    <S.Section>
      <SearchInput
        {...getSearchProps()}
        label="검색창"
        placeholder="플랫폼 또는 관심 정보를 입력해 주세요"
      />
      <PageFilter {...getFilterProps()} />
      {!!getListProps().data.length && <ContentList {...getListProps()} />}
      {!getListProps().data.length && (
        <NotList label="콘텐츠" searched={searched} />
      )}
    </S.Section>
  );
}
