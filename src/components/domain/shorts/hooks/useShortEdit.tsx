import { useEffect } from "react";
import { useImmer } from "use-immer";

import { shortDetailApi, shortEditApi } from "@/utils/api";
import { hasKey } from "@/utils/form";
import { useRouter } from "next/navigation";
import { PATH } from "@/constants";
import { useUploadImage } from "@/hooks";

type UseShortEditProps = {
  id: number;
};

type EditForm = {
  platformType: string;
  title: string;
  content: string;
  shortFormUrl: string;
  thumbnailUrl: string;
  thumbnail?: File | null;
};

const INITIAL_STATE = {
  platformType: "",
  title: "",
  content: "",
  shortFormUrl: "",
  thumbnailUrl: "",
  thumbnail: null,
};

export default function useShortEdit({ id }: UseShortEditProps) {
  const [form, setForm] = useImmer<EditForm>(INITIAL_STATE);
  const {
    platformType,
    title,
    content,
    shortFormUrl,
    thumbnailUrl,
    thumbnail,
  } = form;
  const router = useRouter();
  const isDisabledSubmit = !(platformType && title && content);

  const { selectedImage, previewImage, fileInputRef, handleFileChange } =
    useUploadImage();

  useEffect(() => {
    // fetchDetailData();
    testDetailData();
  }, []);

  useEffect(() => {
    if (selectedImage !== null) {
      setForm((draft) => {
        draft.thumbnail = selectedImage;
      });
    }

    if (previewImage !== null) {
      setForm((draft) => {
        draft.thumbnailUrl = previewImage;
      });
    }
  }, [selectedImage]);

  const fetchDetailData = async () => {
    try {
      const response = await shortDetailApi(id);
      setForm((draft) => {
        draft.platformType = response.data.platformType;
        draft.title = response.data.title;
        draft.content = response.data.content;
        draft.shortFormUrl = response.data.shortFormUrl;
        draft.thumbnailUrl = response.data.thumbnailUrl;
      });
    } catch (error) {
      console.error(error);
    }
  };

  const testDetailData = async () => {
    const response = {
      platformType: "tiktok",
      title: "기존 제목입니다",
      content: "기존 내용입니다",
      shortFormUrl: "https://www.youtube.com",
      thumbnailUrl: "/images/profile.png",
    };
    setForm(response);
  };

  const handleChangeForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!hasKey(form, name)) {
      throw new Error("is not valid name");
    } else if (name !== "platformType" && name !== "thumbnail") {
      setForm((draft) => {
        draft[name] = value;
      });
    }
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    checked &&
      setForm((draft) => {
        draft.platformType = value;
      });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   const formData = new FormData();

    //   if (thumbnail) {
    //     formData.append("thumbnailImage", thumbnail);
    //   }
    //   const shortFormSaveRequest = {
    //     title,
    //     content,
    //     platformType,
    //   };
    //   formData.append(
    //     "shortFormSaveRequest",
    //     new Blob([JSON.stringify(shortFormSaveRequest)], {
    //       type: "application/json",
    //     })
    //   );
    //   const res = await shortEditApi(id, formData);
    //   console.log("res", "res");
    //   if (res.status === 200) {
    //     router.push(`${PATH.SHORTS.DETAIL}/${id}`);
    //   }
    // } catch (error: any) {
    //   console.log(error);
    // }

    try {
      const body = {
        borderId: id,
        platformType,
        title,
        content,
        thumbnail,
      };
      console.log(body);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isDisabledSubmit,
    form,
    fileInputRef,
    handleChangeForm,
    handleChangePlatform,
    handleFileChange,
    handleSubmit,
  };
}
