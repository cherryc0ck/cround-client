import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row("space-between")};
    width: 100%;
  `};
`;

export const ImageNameGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 4px;
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  `};
`;

export const Name = styled.span`
  ${({ theme }) => css`
    ${theme.typo.label.md};
    color: ${theme.colors.neutral300};
  `};
`;

export const LikeBookmarkGroup = styled.div`
  ${({ theme }) => css`
    ${theme.flex.row()};
    gap: 8px;
  `};
`;
