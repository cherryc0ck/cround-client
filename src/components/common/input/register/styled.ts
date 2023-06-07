import styled, { css } from "styled-components";

type ContainerProps = {
  tipMessage: string;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, tipMessage }) => css`
    ${theme.media.mobile} {
      position: relative;
      ${theme.flex.col("center", "flex-start")};
      gap: ${tipMessage ? "16px" : "8px"};
      width: 100%;
    }
  `};
`;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      width: 100%;
      padding: 12px 19px 12px 16px;
      background-color: #f3f3f3;
      border: 1px solid #f3f3f3;
      border-radius: ${theme.radius.md};
      ${theme.typo.label.lg};
      color: ${theme.colors.neutral900};
      caret-color: ${theme.colors.primary500};

      &[aria-invalid="false"] {
        background-color: ${theme.colors.primary50};
        border: 1px solid ${theme.colors.primary50};
      }

      :focus {
        border: 1px solid ${theme.colors.neutral200};
        background-color: ${theme.colors.white};
      }

      ::placeholder {
        ${theme.typo.label.lg};
        ${theme.colors.neutral300};
      }
    }
  `};
`;

// 유효메세지, 에러메세지 공통 스타일
export const Message = styled.span`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      bottom: -24px;
      left: 16px;
      ${theme.typo.label.md};
    }
  `};
`;

export const ValidMessage = styled(Message)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      color: ${theme.colors.neutral400};
    }
  `};
`;

export const ErrorMessage = styled(Message)`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      color: ${theme.colors.primary500};
    }
  `};
`;

export const InputMessage = styled.div`
  ${({ theme }) => css`
    ${theme.media.mobile} {
      position: absolute;
      bottom: -24px;
      left: 16px;
      ${theme.typo.label.md};

      /* &[aria-invalid="true"] {
        color: ${theme.colors.neutral400};
      }

      &[aria-invalid="false"] {
        color: ${theme.colors.primary500};
      } */
    }
  `};
`;
