"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

export const LinkCard = styled(Link)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      display: block;
      width: 100%;
      height: 100%;
    }
  `};
`;

export const Article = styled.article`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("flex-start")};
      gap: 16px;
      width: 100%;
      height: 100%;
      max-height: 333.5px;
      padding-bottom: 16px;
      background-color: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral50};
      border-radius: ${theme.radius.md};
    }

    ${theme.media.desktop} {
      gap: 29.23px;
      width: 585px;
      max-height: 100%;
      padding-bottom: 29.23px;
      border-radius: ${theme.radius.lg};
    }
  `};
`;

export const Figure = styled.figure`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: relative;
      width: 100%;
      background-color: ${theme.colors.neutral50};
      border-radius: ${theme.radius.md} ${theme.radius.md} 0px 0px;
      aspect-ratio: 320/118;

      img {
        border-radius: ${theme.radius.md} ${theme.radius.md} 0px 0px;
      }
    }
  `};
`;

export const InfoGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 16px;
      width: 100%;
      padding: 0 16px;

      ${theme.media.desktop} {
        gap: 29.23px;
        padding: 0 29.23px;
      }
    }
  `};
`;

export const TitleGroup = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 4px;

      span {
        ${theme.typo.body.sm};
        color: ${theme.colors.neutral900};
      }
      h3 {
        height: 40px;
        ${theme.typo.title.sm};
        color: ${theme.colors.neutral900};
        ${theme.text.skip(2)};
      }
    }
    ${theme.media.desktop} {
      gap: 7.31px;

      span {
        ${theme.typo.body.lg}
      }

      h3 {
        height: 56px;
        ${theme.typo.title.lg};
      }
    }
  `};
`;
