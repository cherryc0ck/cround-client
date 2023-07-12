import styled, { css } from "styled-components";

type LabelProps = {
  isVisibleLabel: boolean;
};

type InputProps = {
  isVisibleLabel: boolean;
};

export const Container = styled.div`
  position: relative;
  width: 100%;

  input:focus ~ label {
    display: block;
  }
`;

export const Label = styled.label<LabelProps>`
  ${({ theme, isVisibleLabel }) => css`
    position: absolute;
    top: 12px;
    left: 16px;
    display: ${isVisibleLabel ? "block" : "none"};
    ${theme.typo.label.sm};
    color: ${theme.colors.neutral500};

    ${theme.media.desktop} {
      top: 8.5px;
      left: 16px;
      ${theme.typo.label.md};
    }
  `};
`;

export const Input = styled.input<InputProps>`
  ${({ theme, isVisibleLabel }) => css`
    ${theme.input.styles.base};
    padding: ${isVisibleLabel ? "28px 16px 12px 16px" : "20px 16px"};
  `};
`;

export const InputMessage = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: -24px;
    left: 16px;
    ${theme.typo.label.md};

    &[aria-invalid="true"] {
      color: ${theme.colors.neutral400};
    }

    &[aria-invalid="false"] {
      color: ${theme.colors.primary500};
    }
  `};
`;

// 유효메세지, 에러메세지 공통 스타일
export const Message = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: -24px;
    left: 16px;
    ${theme.typo.label.md};
  `};
`;

export const ValidMessage = styled(Message)`
  ${({ theme }) => css`
    color: ${theme.colors.neutral400};
  `};
`;

export const ErrorMessage = styled(Message)`
  ${({ theme }) => css`
    color: ${theme.colors.primary500};
  `};
`;
