import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 24px;
      width: 100%;
      padding: 27px 48px 12px 48px;
      background-color: ${theme.colors.white};
      border: 1px dashed ${theme.colors.primary200};
      border-radius: ${theme.radius.md};

      svg {
        width: 40px;
        height: 40px;
        stroke: ${theme.colors.primary500};
      }
    }
  `};
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      gap: 8px;
      width: 100%;
    }
  `};
`;

export const Extension = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral200};
    }
  `};
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.flex.col()};
      width: 100%;
    }
  `};
`;

export const TipMessage = styled.p`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      ${theme.typo.label.sm};
      color: ${theme.colors.neutral300};
    }
  `};
`;
