import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col("center", "flex-start")};
      gap: 8px;
      width: 100%;
      color: ${theme.colors.neutral900};
    }
  `};
`;

export const Label = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.button.md};
    }
  `};
`;

export const Content = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.title.sm};
    }
  `};
`;
