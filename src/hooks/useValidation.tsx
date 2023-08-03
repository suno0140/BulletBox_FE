type validation = {
  emailCheck?: string;
  setEmailMessage?: React.Dispatch<React.SetStateAction<string>>;
  setIsEmail?: React.Dispatch<React.SetStateAction<boolean>>;

  nickNameCheck?: string;
  setNickNameMessage?: React.Dispatch<React.SetStateAction<string>>;
  setIsNickName?: React.Dispatch<React.SetStateAction<boolean>>;

  passwordCheck?: string;
  setPasswordMessage?: React.Dispatch<React.SetStateAction<string>>;
  setIsPassword?: React.Dispatch<React.SetStateAction<boolean>>;

  password?: string;
  passwordConfirm?: string;
  setPasswordConfirmMessage?: React.Dispatch<React.SetStateAction<string>>;
  setIsPasswordConfirm?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useEmailValidation = ({
  emailCheck,
  setEmailMessage,
  setIsEmail,
}: validation) => {
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  if (!emailRegex.test(emailCheck)) {
    setEmailMessage('* 올바른 이메일 형식이 아닙니다.');
    setIsEmail(false);
  } else {
    setEmailMessage('* 중복체크를 해주세요.');
    setIsEmail(false);
  }
};

export const useNickNameValidation = ({
  nickNameCheck,
  setNickNameMessage,
  setIsNickName,
}: validation) => {
  const nickNameRegex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;

  if (!nickNameRegex.test(nickNameCheck)) {
    setNickNameMessage(`* 사용 불가능한 닉네임입니다.`);
    setIsNickName(false);
  } else {
    setNickNameMessage(`* 사용 가능한 닉네임입니다.`);
    setIsNickName(true);
  }
};

export const usePasswordValidation = ({
  passwordCheck,
  setPasswordMessage,
  setIsPassword,
}: validation) => {
  const passwordRegex = /^[A-Za-z0-9]{8,20}$/;

  if (!passwordRegex.test(passwordCheck)) {
    setPasswordMessage('* 8자리이상 20자리이하로 입력해주세요.');
    setIsPassword(false);
  } else {
    setPasswordMessage('* 사용 가능한 비밀번호입니다.');
    setIsPassword(true);
  }
};

export const usePasswordConfirmValidation = ({
  password,
  passwordConfirm,
  setPasswordConfirmMessage,
  setIsPasswordConfirm,
}: validation) => {
  if (password === passwordConfirm) {
    setPasswordConfirmMessage('* 비밀번호가 일치합니다.');
    setIsPasswordConfirm(true);
  } else {
    setPasswordConfirmMessage('* 비밀번호가 일치하지 않습니다.');
    setIsPasswordConfirm(false);
  }
};
